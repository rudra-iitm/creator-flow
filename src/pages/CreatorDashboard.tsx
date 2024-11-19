import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { UserButton, useSession } from "@clerk/clerk-react"
import { Upload, Search, Edit, BarChart, MessageSquare, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CreatorCollab logo">
      <rect width="40" height="40" rx="8" fill="#3B82F6"/>
      <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM18 24V16L24 20L18 24Z" fill="white"/>
      <path d="M32 14.5C32 15.8807 30.8807 17 29.5 17C28.1193 17 27 15.8807 27 14.5C27 13.1193 28.1193 12 29.5 12C30.8807 12 32 13.1193 32 14.5Z" fill="#10B981"/>
    </svg>
  )
}

export function CreatorDashboard() {
    const navigate = useNavigate()

    const { isSignedIn } = useSession();

    if (!isSignedIn) {
        navigate('/');
    }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Creator Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2" />
                  Upload New Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Start a new collaboration by uploading your project.</p>
                <Button className="w-full" onClick={() => navigate('/upload')}>
                  <Upload className="mr-2 h-4 w-4" /> Upload Project
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2" />
                  Explore Editors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Find the perfect editor for your next project.</p>
                <div className="flex space-x-2">
                  <Input placeholder="Search editors..." />
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Edit className="mr-2" />
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">You have 3 projects in progress.</p>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Eco-Warriors Documentary</span>
                    <Button variant="outline" size="sm" onClick={() => navigate('/review')}>Review</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Tech Startup Promo</span>
                    <Button variant="outline" size="sm" onClick={() => navigate('/review')}>Review</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Music Festival Highlights</span>
                    <Button variant="outline" size="sm" onClick={() => navigate('/review')}>Review</Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2" />
                  Analytics Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Your content performance at a glance.</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total Views</span>
                    <span className="font-bold">1.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Watch Time</span>
                    <span className="font-bold">4:32</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engagement Rate</span>
                    <span className="font-bold">8.7%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Detailed Analytics</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2" />
                  Recent Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>New message from John (Editor)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Feedback on 'Travel Highlights'</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    <span>Project update from Sarah</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Open Inbox</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide clear instructions to your editors</li>
                  <li>Regular communication leads to better results</li>
                  <li>Explore different editing styles to enhance your content</li>
                  <li>Keep your project files organized for smooth collaboration</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View More Tips</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

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