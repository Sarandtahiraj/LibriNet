import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/40 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-bold text-xl">LibriNet</h3>
            <p className="text-muted-foreground">
              Your one-stop destination for all your reading needs, curating quality books across every genre.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/books" className="text-muted-foreground hover:text-foreground transition-colors">
                Books
              </Link>
              <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>123 Book Street<br />Reading City, RC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@LibriNet.com</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-semibold text-lg">Newsletter</h4>
            <p className="text-muted-foreground">Subscribe to receive updates on new releases and special offers.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LibriNet. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}