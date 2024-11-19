import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { UserButton, useSession } from "@clerk/clerk-react"
import { Star } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import editor from '@/assets/editor1.jpeg'
import branding from '@/assets/brand.jpeg'
import documentary from '@/assets/documentary.jpeg'
import product from '@/assets/product.jpeg'
import training from '@/assets/training.jpeg'

function Logo() {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CreatorCollab logo">
        <rect width="40" height="40" rx="8" fill="#3B82F6"/>
        <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM18 24V16L24 20L18 24Z" fill="white"/>
        <path d="M32 14.5C32 15.8807 30.8807 17 29.5 17C28.1193 17 27 15.8807 27 14.5C27 13.1193 28.1193 12 29.5 12C30.8807 12 32 13.1193 32 14.5Z" fill="#10B981"/>
      </svg>
    )
  }

export function Editor() {
    const navigate = useNavigate()

    const { isSignedIn } = useSession();

    if (!isSignedIn) {
        navigate('/');
    }

  return (
    <div className="min-h-screen bg-background">
        <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center hover:cursor-pointer" onClick={() => navigate('/')}>
              <Logo />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">CreatorFlow</h1>
            </div>
            <nav>
              <ul className="hidden md:inline-flex space-x-4">
                <li><button onClick={() => navigate('/creator-dashboard')} className="text-gray-600 hover:text-gray-900">Dashboard</button></li>
                <li><button onClick={() => navigate('/projects')} className="text-gray-600 hover:text-gray-900">My Projects</button></li>
                <li><button onClick={() => navigate('/editors')} className="text-gray-600 hover:text-gray-900">Find Editors</button></li>
                <UserButton />
              </ul>
              <div className="md:hidden flex justify-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem><button onClick={() => navigate('/creator-dashboard')} className="text-gray-600 hover:text-gray-900">Dashboard</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => navigate('/projects')} className="text-gray-600 hover:text-gray-900">My Projects</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => navigate('/editors')} className="text-gray-600 hover:text-gray-900">Find Editors</button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <UserButton />
            </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="mb-8">
          <img
            src={editor}
            alt="John Doe"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Alice Johnson</h1>
        <p className="text-xl text-muted-foreground mb-8">Professional Video Editor & Motion Graphics Designer</p>
        <Button size="lg">Hire Me</Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg mb-4">
            With over 10 years of experience in video editing and motion graphics, I bring creativity and technical expertise to every project. My passion lies in storytelling through visual media, and I strive to deliver high-quality content that engages and inspires audiences.
          </p>
          <p className="text-lg">
            I've worked with a diverse range of clients, from small startups to large corporations, always ensuring that each project receives my full attention and dedication.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Video Editing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Adobe Premiere Pro</li>
                  <li>Final Cut Pro</li>
                  <li>DaVinci Resolve</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Motion Graphics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Adobe After Effects</li>
                  <li>Cinema 4D</li>
                  <li>Blender</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Color Grading</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>DaVinci Resolve</li>
                  <li>Lumetri Color</li>
                  <li>FilmConvert</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Previous Works Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Previous Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Brand Launch Video",
                client: "TechNova Startups",
                description: "Created a dynamic 2-minute brand launch video featuring motion graphics and 3D elements to introduce TechNova's revolutionary AI product.",
                thumbnail: branding
              },
              {
                title: "Documentary Series",
                client: "Global Explorer Channel",
                description: "Edited a 5-episode documentary series on sustainable living practices around the world, including color grading and sound design.",
                thumbnail: documentary
              },
              {
                title: "Product Commercial",
                client: "EcoLife Essentials",
                description: "Produced a 30-second commercial for EcoLife's new line of biodegradable household products, incorporating eye-catching visual effects.",
                thumbnail: product
              },
              {
                title: "Corporate Training Videos",
                client: "MegaCorp Industries",
                description: "Developed a series of 10 internal training videos for MegaCorp's onboarding process, featuring animated infographics and screen captures.",
                thumbnail: training
              }
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>Client: {project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img className="bg-gray-200 mb-4" src={project.thumbnail}></img>
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Watch Video</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Hourly Rate</CardTitle>
                <CardDescription>
                  $30 - $45 per hour
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Ideal for ongoing projects or tasks with undefined scope.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Project-Based</CardTitle>
                <CardDescription>
                  Starting from $500 per project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Perfect for well-defined projects with clear deliverables.</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Basic',
                price: '$500',
                features: [
                  'Basic video editing',
                  'Trimming and cutting',
                  'Simple transitions',
                  'Background music',
                  'Up to 5 minutes final video'
                ]
              },
              {
                tier: 'Standard',
                price: '$1000',
                features: [
                  'Advanced video editing',
                  'Custom transitions',
                  'Basic motion graphics',
                  'Color correction',
                  'Voice-over integration',
                  'Up to 10 minutes final video'
                ]
              },
              {
                tier: 'Premium',
                price: '$2000',
                features: [
                  'Complex video editing',
                  'Advanced motion graphics',
                  'Custom visual effects',
                  'Color grading',
                  'Sound design',
                  '3D elements integration',
                  'Up to 20 minutes final video'
                ]
              }
            ].map((plan, index) => (
              <Card key={plan.tier} className={index === 1 ? 'border-primary' : ''}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.tier}</CardTitle>
                  <CardDescription>
                    {plan.price}/project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About CreatorFlow</h3>
              <p className="text-sm text-gray-300">Empowering creators and editors to produce amazing content together.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick as</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Find Editors</a></li>
                <li><a href="#" className="hover:text-gray-300">For Creators</a></li>
                <li><a href="#" className="hover:text-gray-300">For Editors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Youtube className="w-6 h-6" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">&copy; 2024 CreatorFlow. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="text-black border-white hover:bg-white hover:text-gray-800">
                Subscribe to Our Newsletter
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}