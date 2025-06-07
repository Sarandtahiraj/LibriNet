'use client';

import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '../mode-toggle';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const mainNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Books', href: '/books' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">LibriNet</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className={`${isSearchOpen ? 'flex' : 'hidden md:flex'} w-full max-w-sm items-center relative`}>
            <Input
              type="search"
              placeholder="Search books..."
              className="pr-8"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              <span className="sr-only">{isSearchOpen ? 'Close search' : 'Open search'}</span>
            </Button>

            <ModeToggle />

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                3
              </Badge>
              <span className="sr-only">Shopping Cart</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-4 py-4">
                  <Link href="/" className="text-xl font-bold">
                    LibriNet
                  </Link>
                  <div className="grid gap-2">
                    {mainNavItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="flex py-2 text-foreground transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}