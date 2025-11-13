import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Camera, ImageIcon, Star, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { feedbackService } from "@/integrations/mongodb/services";

const Feedback = () => {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    place: "",
    productName: "",
    rating: 5,
    comment: "",
  });

  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [feedbacksLoading, setFeedbacksLoading] = useState(true);

  // Fetch feedbacks from MongoDB
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      setFeedbacksLoading(true);
      const result = await feedbackService.getAll();
      
      if (result.error) throw result.error;
      
        // Transform data to match the expected format
        const transformedData = result.data?.map((feedback: any) => ({
          id: feedback._id,
          name: feedback.name,
          rating: feedback.rating,
          comment: feedback.comment,
          image: feedback.image_url,
          location: feedback.location,
          productName: feedback.product_name,
          date: new Date(feedback.created_at).toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
          }),
          verified: feedback.verified
        })) || [];
      
      setFeedbacks(transformedData);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      toast({
        title: "Error loading feedback",
        description: "Could not load customer feedback. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setFeedbacksLoading(false);
    }
  };

  // Calculate rating distribution dynamically
  const calculateRatingStats = () => {
    const totalReviews = feedbacks.length;
    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    feedbacks.forEach(feedback => {
      ratingCounts[feedback.rating as keyof typeof ratingCounts]++;
    });

    const ratingDistribution = Object.entries(ratingCounts)
      .reverse()
      .map(([stars, count]) => ({
        stars: parseInt(stars),
        count,
        percentage: totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0
      }));

    const averageRating = totalReviews > 0 
      ? feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) / totalReviews 
      : 0;

    return { ratingDistribution, averageRating: Number(averageRating.toFixed(1)), totalReviews };
  };

  const { ratingDistribution, averageRating, totalReviews } = calculateRatingStats();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFeedbackForm(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFeedbackForm(prev => ({
      ...prev,
      rating
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to MongoDB
      const result = await feedbackService.create({
        name: feedbackForm.name,
        location: feedbackForm.place,
        product_name: feedbackForm.productName,
        rating: feedbackForm.rating,
        comment: feedbackForm.comment,
        image_url: imagePreview
      });

      if (result.error) throw result.error;

      toast({
        title: "Thank you for your feedback!",
        description: "Your review has been submitted successfully.",
      });

      // Reset form
      setFeedbackForm({
        name: "",
        place: "",
        productName: "",
        rating: 5,
        comment: "",
      });
      setSelectedImage(null);
      setImagePreview(null);
      setDialogOpen(false);

      // Refresh feedbacks list
      fetchFeedbacks();
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Error submitting feedback",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-warm bg-clip-text text-transparent">
              Customer Feedback
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              See what our valued customers have to say about our authentic South Indian food products
            </p>
          </div>

          {/* Feedback Submission Button */}
          <div className="mt-12 sm:mt-16 text-center">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-warm hover:shadow-warm transition-all duration-300 px-8 py-3 text-lg font-semibold"
                  size="lg"
                >
                  Give Your Feedback
                </Button>
              </DialogTrigger>
                <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-auto px-4">

                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl text-center text-foreground">Share Your Experience</DialogTitle>
                  <p className="text-center text-muted-foreground text-sm sm:text-base">
                    We'd love to hear about your experience with our products!
                  </p>
                </DialogHeader>
                
                <form onSubmit={handleFeedbackSubmit} className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={feedbackForm.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="place">Place</Label>
                      <Input
                        id="place"
                        placeholder="Your city"
                        value={feedbackForm.place}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                      id="productName"
                      placeholder="Which product did you try?"
                      value={feedbackForm.productName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label>Rating</Label>
                    <div className="flex space-x-1 mt-2">
                      {Array.from({ length: 5 }, (_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleRatingChange(index + 1)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-8 w-8 cursor-pointer transition-colors ${
                              index < feedbackForm.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200 hover:fill-yellow-200 hover:text-yellow-200"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="comment">Your Feedback</Label>
                    <Textarea
                      id="comment"
                      placeholder="Tell us about your experience with our products..."
                      rows={4}
                      value={feedbackForm.comment}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

          <div>
      <Label>Upload Image (Optional)</Label>
      <div className="mt-2">
        {!imagePreview ? (
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
            {/* Hidden inputs */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="gallery-upload"
            />
            <input
              type="file"
              accept="image/*"
              capture="environment"  // forces camera on mobile
              onChange={handleImageUpload}
              className="hidden"
              id="camera-upload"
            />

            <div className="flex flex-col items-center gap-3">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Choose how to upload
              </span>

              <div className="flex gap-4 mt-3">
                {/* Gallery Button */}
                <label
                  htmlFor="gallery-upload"
                  className="cursor-pointer flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  <ImageIcon className="h-4 w-4" />
                  Gallery
                </label>

                {/* Camera Button */}
                <label
                  htmlFor="camera-upload"
                  className="cursor-pointer flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  <Camera className="h-4 w-4" />
                  Camera
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-warm hover:shadow-warm transition-all duration-300"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <br /><br />
          {/* Overall Rating Summary (Flipkart Style) */}
          <div className="mb-12">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Overall Rating */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                      <div className="text-4xl font-bold text-foreground">{averageRating}</div>
                      <div className="flex space-x-1">
                        {renderStars(Math.round(averageRating))}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {totalReviews} Reviews & Ratings
                    </p>
                  </div>

                  {/* Right: Rating Distribution */}
                  <div className="space-y-2">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-12">
                          <span className="text-sm">{item.stars}</span>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        </div>
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Reviews */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Customer Reviews</h2>
            {feedbacksLoading ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Loading reviews...</p>
              </div>
            ) : feedbacks.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {feedbacks.map((feedback) => (
                  <Card key={feedback.id} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Review Image - Only show if image exists */}
                        {feedback.image && (
                          <div className="w-full sm:w-20 h-48 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={feedback.image}
                              alt={`Review by ${feedback.name}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Review Content */}
                        <div className="flex-1">
                          {/* Rating and Product */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                            <div className="flex space-x-1">
                              {renderStars(feedback.rating)}
                            </div>
                            
                          </div>

                          {/* Product Name */}
                          <div className="mb-2">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {feedback.productName}
                            </span>
                          </div>

                          {/* Review Text */}
                          <p className="text-foreground leading-relaxed mb-4 text-sm sm:text-base">
                            {feedback.comment}
                          </p>

                          {/* Reviewer Info */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">{feedback.name}</span>
                            <span>{feedback.location}</span>
                            <span>{feedback.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Feedback;