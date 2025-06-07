'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in production)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-muted/40 py-16 mb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help! Reach out to our team with any questions, suggestions, or inquiries.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info cards */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Book Street<br />
                      Reading City, RC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      Customer Service: (555) 123-4567<br />
                      Business Inquiries: (555) 987-6543
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      General Inquiries:<br />
                      <a href="mailto:info@LibriNet.com" className="text-primary hover:underline">info@LibriNet.com</a>
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Support:<br />
                      <a href="mailto:support@LibriNet.com" className="text-primary hover:underline">support@LibriNet.com</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact forms */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="support">Support</TabsTrigger>
                    <TabsTrigger value="business">Business</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="general">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="support">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="support-name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="support-name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="support-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="support-email" type="email" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="order-number" className="text-sm font-medium">
                          Order Number (if applicable)
                        </label>
                        <Input id="order-number" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="support-issue" className="text-sm font-medium">
                          Issue Type
                        </label>
                        <select 
                          id="support-issue"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select an issue</option>
                          <option value="order">Order Status</option>
                          <option value="shipping">Shipping & Delivery</option>
                          <option value="return">Returns & Refunds</option>
                          <option value="product">Product Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="support-message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea id="support-message" rows={6} required />
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Support Request
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="business">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="business-name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="business-name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="business-email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="business-email" type="email" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium">
                            Company
                          </label>
                          <Input id="company" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="position" className="text-sm font-medium">
                            Position
                          </label>
                          <Input id="position" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="inquiry-type" className="text-sm font-medium">
                          Inquiry Type
                        </label>
                        <select 
                          id="inquiry-type"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="vendor">Vendor Application</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="press">Press & Media</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="business-message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea id="business-message" rows={6} required />
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Business Inquiry
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about LibriNet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How long does shipping take?",
                a: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout."
              },
              {
                q: "What is your return policy?",
                a: "We accept returns within 30 days of delivery for items in their original condition. Please visit our Returns page for more details."
              },
              {
                q: "Do you ship internationally?",
                a: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location."
              },
              {
                q: "How can I track my order?",
                a: "Once your order ships, you'll receive a confirmation email with tracking information that you can use to monitor your delivery."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="link" className="gap-2">
              View all FAQs <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Live chat CTA */}
        <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
          <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Need immediate assistance?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Our customer support team is available for live chat during business hours.
          </p>
          <Button className="gap-2">
            Start Live Chat <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}