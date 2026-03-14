const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">SHREE KALYANI FOODS</h3>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
          Committed to providing you with the freshest, most authentic South Indian foods with no preservatives or chemicals.
        </p>
        <div className="border-t border-primary-foreground/20 pt-6 mt-6">
          <p className="text-primary-foreground/60 text-sm">
            &copy; 2025 Shree Kalyani Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;