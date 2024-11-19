import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
import { UserButton, useSession } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

type Editor = {
  id: number
  name: string
  avatar: string
  expertise: string[]
  description: string
}

const editors: Editor[] = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    expertise: ["Motion Graphics", "Color Grading"],
    description: "Specializes in creating stunning motion graphics and expert color grading for films and commercials.",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=100&width=100",
    expertise: ["Documentary", "Sound Design"],
    description: "Expert in documentary editing and crafting immersive soundscapes for various video projects.",
  },
  {
    id: 3,
    name: "Carol Davis",
    avatar: "/placeholder.svg?height=100&width=100",
    expertise: ["VFX", "3D Animation"],
    description: "Focuses on visual effects integration and 3D animation for music videos and short films.",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "/placeholder.svg?height=100&width=100",
    expertise: ["Sports Highlights", "Live Event Editing"],
    description: "Specializes in fast-paced sports highlight reels and live event video editing.",
  },
]

function Logo() {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CreatorCollab logo">
        <rect width="40" height="40" rx="8" fill="#3B82F6"/>
        <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM18 24V16L24 20L18 24Z" fill="white"/>
        <path d="M32 14.5C32 15.8807 30.8807 17 29.5 17C28.1193 17 27 15.8807 27 14.5C27 13.1193 28.1193 12 29.5 12C30.8807 12 32 13.1193 32 14.5Z" fill="#10B981"/>
      </svg>
    )
  }

export function Editors() {
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
              <ul className="flex space-x-4">
                <li><button onClick={() => navigate('/creator-dashboard')} className="text-gray-600 hover:text-gray-900">Dashboard</button></li>
                <li><button onClick={() => navigate('/projects')} className="text-gray-600 hover:text-gray-900">My Projects</button></li>
                <li><button onClick={() => navigate('/editors')} className="text-gray-600 hover:text-gray-900">Find Editors</button></li>
                <UserButton />
              </ul>
            </nav>
          </div>
        </div>
      </header>

    <main>
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Expert Video Editors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {editors.map((editor) => (
          <Card key={editor.id} className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={editor.avatar} alt={editor.name} />
                <AvatarFallback>{editor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{editor.name}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {editor.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{editor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </main>
    
    <footer className="bg-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About CreatorCollab</h3>
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
            <p className="text-sm text-gray-300">&copy; 2023 CreatorCollab. All rights reserved.</p>
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