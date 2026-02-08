import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 flex flex-col items-center text-center scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8">Let's Get in Touch!</h2>
      <p className="text-muted-foreground max-w-xl mb-12">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <div className="flex flex-wrap gap-6 justify-center">
        <a 
          href="mailto:franzkhylm.ong@gmail.com" 
          className="flex items-center space-x-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span>Email Me</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/franz-khyl-ong/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-muted transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          <span>LinkedIn</span>
        </a>
        
        <a 
          href="https://github.com/FranzKhylOng" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-muted transition-colors"
        >
          <Github className="h-5 w-5" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
