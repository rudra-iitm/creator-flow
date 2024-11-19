import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Users, AlertCircle, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
import editor1 from '@/assets/editor1.jpeg'
import editor2 from '@/assets/editor2.jpeg'
import editor3 from '@/assets/editor3.jpeg'
import { UserButton, useSession } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

function Logo() {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CreatorFlow logo">
        <rect width="40" height="40" rx="8" fill="#3B82F6"/>
        <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM18 24V16L24 20L18 24Z" fill="white"/>
        <path d="M32 14.5C32 15.8807 30.8807 17 29.5 17C28.1193 17 27 15.8807 27 14.5C27 13.1193 28.1193 12 29.5 12C30.8807 12 32 13.1193 32 14.5Z" fill="#10B981"/>
      </svg>
    )
  }

export function UploadProject() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editor, setEditor] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Here you would typically send the data to your backend
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
    setIsSubmitting(false)
    alert('Project uploaded and assigned successfully!')
    // Reset form
    setFile(null)
    setTitle('')
    setDescription('')
    setEditor('')
  }

  const navigate = useNavigate()

  const { isSignedIn } = useSession();

  if (!isSignedIn) {
      navigate('/');
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
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

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Upload Project & Assign Editor</CardTitle>
            <CardDescription>Fill in the details of your project and choose an editor to collaborate with.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="file">Project File</Label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500">MP4, MOV, or AVI (MAX. 2GB)</p>
                    </div>
                    <Input id="file" type="file" className="hidden" onChange={handleFileChange} accept=".mp4,.mov,.avi" />
                  </label>
                </div>
                {file && <p className="text-sm text-gray-500">{file.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="editor">Assign Editor</Label>
                <Select value={editor} onValueChange={setEditor} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an editor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="editor1">John Doe - Cinematic Expert</SelectItem>
                    <SelectItem value="editor2">Jane Smith - Fast-paced Editor</SelectItem>
                    <SelectItem value="editor3">Mike Johnson - Color Grading Specialist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} disabled={isSubmitting || !file || !title || !description || !editor} className="w-full">
              {isSubmitting ? 'Uploading...' : 'Upload Project & Assign Editor'}
            </Button>
          </CardFooter>
        </Card>

        <Card className="max-w-2xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="text-xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Upload className="w-12 h-12 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">1. Upload</h3>
                <p className="text-sm text-gray-500">Upload your raw footage or project files</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">2. Assign</h3>
                <p className="text-sm text-gray-500">Choose an editor that matches your style</p>
              </div>
              <div className="text-center">
                <AlertCircle className="w-12 h-12 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">3. Review</h3>
                <p className="text-sm text-gray-500">Receive and review the edited project</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-2xl mx-auto mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Featured Editors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <img
                    src={index === 0 ? editor1 : index === 1 ? editor2 : editor3}
                    alt={`${name}'s profile picture`}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-2"
                  />
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm text-gray-500">Expert Editor</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About CreatorFlow</h3>
              <p className="text-sm text-gray-300">Empowering creators and editors to produce amazing content together.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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