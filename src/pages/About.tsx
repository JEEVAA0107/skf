import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-warm bg-clip-text text-transparent">
              About Shree Kalyani Foods
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bringing authentic South Indian flavors to your table with tradition, quality, and care
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Shree Kalyani Foods was born from a passion for preserving the authentic tastes of South Indian cuisine. 
                  Founded with the vision of bringing traditional, home-style food to modern families, we have been committed 
                  to maintaining the highest standards of quality and authenticity.
                </p>
                <p>
                  Our journey began with a simple belief: food should be fresh, healthy, and made with love. Every product 
                  we create follows time-honored recipes passed down through generations, ensuring that each bite delivers 
                  the genuine flavors of South India.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Values</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Quality First</h3>
                    <p className="text-muted-foreground text-sm">We use only the freshest ingredients with absolutely no preservatives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Authentic Taste</h3>
                    <p className="text-muted-foreground text-sm">Traditional recipes and methods ensure authentic South Indian flavors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Health & Wellness</h3>
                    <p className="text-muted-foreground text-sm">Nutritious ingredients that promote health and well-being</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-gradient-subtle p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Our Commitment</h2>
            <div className="text-center text-muted-foreground max-w-2xl mx-auto">
              <p className="mb-4">
                At Shree Kalyani Foods, we are committed to delivering exceptional quality in every product. 
                From our carefully sourced ingredients to our meticulous preparation process, we ensure that 
                every item meets our high standards.
              </p>
              <p>
                We believe that great food brings families together, and we're honored to be part of your 
                dining experience. Thank you for trusting us to bring the flavors of South India to your home.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;