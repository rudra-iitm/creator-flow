import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { UserButton, useSession } from "@clerk/clerk-react"
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import eco from '@/assets/eco.jpeg'
import ai from '@/assets/ai.jpeg'
import music from '@/assets/music.jpeg'
import journey from '@/assets/journey.jpeg'

type Project = {
  id: number
  name: string
  status: "In Progress" | "Editing" | "Post-Production" | "Final Review"
  thumbnail: string
  description: string
  progress: number
  assignedEditor: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "Eco-Warriors Documentary",
    status: "Editing",
    thumbnail: eco,
    description: "A compelling documentary showcasing environmental activists around the world.",
    progress: 60,
    assignedEditor: "Alice Johnson"
  },
  {
    id: 2,
    name: "Tech Startup Promo",
    status: "Post-Production",
    thumbnail: ai,
    description: "Promotional video for an innovative AI-driven startup in Silicon Valley.",
    progress: 85,
    assignedEditor: "Bob Smith"
  },
  {
    id: 3,
    name: "Music Festival Highlights",
    status: "In Progress",
    thumbnail: music,
    description: "Capturing the essence of a three-day music festival featuring top artists.",
    progress: 30,
    assignedEditor: "Carol Davis"
  },
  {
    id: 4,
    name: "Culinary Journey Series",
    status: "Final Review",
    thumbnail: journey,
    description: "A series exploring unique cuisines and cooking techniques from around the globe.",
    progress: 95,
    assignedEditor: "David Wilson"
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

export function Projects() {
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
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Current Video Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1400px] mx-auto">
        {projects.map((project) => (
          <Card onClick={() => navigate('/review')} key={project.id} className="flex flex-col h-full hover:cursor-pointer">
            <CardHeader>
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={project.thumbnail}
                  alt={`Thumbnail for ${project.name}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="flex justify-between items-center">
                <span>{project.name}</span>
                <Badge
                  variant={
                    project.status === "In Progress"
                      ? "default"
                      : project.status === "Editing"
                      ? "secondary"
                      : project.status === "Post-Production"
                      ? "outline"
                      : "destructive"
                  }
                >
                  {project.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <p className="text-muted-foreground mb-2 line-clamp-2">{project.description}</p>
                <p className="text-sm font-medium mb-4">Editor: {project.assignedEditor}</p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="w-full" />
              </div>
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