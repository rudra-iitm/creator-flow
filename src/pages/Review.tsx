import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, XCircle, RotateCcw, Upload, MessageCircle, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
import previewVideo from '@/assets/preview-video.mp4'
import editor1 from '@/assets/editor1.jpeg'
import editor2 from '@/assets/editor2.jpeg'
import { UserButton, useSession } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CreatorCollab logo">
      <rect width="40" height="40" rx="8" fill="#3B82F6"/>
      <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM18 24V16L24 20L18 24Z" fill="white"/>
      <path d="M32 14.5C32 15.8807 30.8807 17 29.5 17C28.1193 17 27 15.8807 27 14.5C27 13.1193 28.1193 12 29.5 12C30.8807 12 32 13.1193 32 14.5Z" fill="#10B981"/>
    </svg>
  )
}

export function Review() {
  const [feedback, setFeedback] = useState('')
  const [isApproving, setIsApproving] = useState(false)
  const [isReEditing, setIsReEditing] = useState(false)

  const handleApprove = async () => {
    setIsApproving(true)
    // Simulate API call for approval and upload
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsApproving(false)
    alert('Project approved and uploaded successfully!')
  }

  const handleReEdit = async () => {
    setIsReEditing(true)
    // Simulate API call for re-edit request
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsReEditing(false)
    alert('Re-edit request sent successfully!')
  }

  const navigate = useNavigate()

  const { isSignedIn } = useSession();

  if (!isSignedIn) {
      navigate('/');
  }

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200">
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

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Review Edited Project</CardTitle>
            <CardDescription>Review your edited project and choose to approve or request changes.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                <p><strong>Title:</strong> Eco-Warriors Documentary</p>
                <p><strong>Editor:</strong> Alice Johnson</p>
                <p><strong>Submitted:</strong> November 19, 2023</p>
              </div>

              <Tabs defaultValue="preview" className="w-full">
                <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="compare">Before/After</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                        {/* Show loading spinner */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="loader">Loading...</div>
                            </div>
                        )}
                        
                        <video
                            src={previewVideo}
                            className="w-full h-full object-cover hover:cursor-pointer"
                            loop
                            onMouseEnter={(e) => {
                                const videoElement = e.target as HTMLVideoElement;
                                videoElement.muted = false; // Unmute the video
                                
                                // Only play if not already playing
                                if (videoElement.paused) {
                                    videoElement.play().catch((error) => {
                                        console.error("Error playing the video:", error);
                                    });
                                }
                            }}
                            onMouseLeave={(e) => {
                                const videoElement = e.target as HTMLVideoElement;
                                videoElement.pause(); // Pause the video
                                videoElement.muted = true; // Mute the video when not hovering
                            }}
                            onCanPlay={() => setIsLoading(false)} // Hide loading when video is ready to play
                            onWaiting={() => setIsLoading(true)} // Show loading when video is buffering
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </TabsContent>

                <TabsContent value="compare">
                  <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                        {/* Show loading spinner */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="loader">Loading...</div>
                            </div>
                        )}
                        
                        <video
                            src={previewVideo}
                            className="w-full h-full object-cover hover:cursor-pointer"
                            loop
                            onMouseEnter={(e) => {
                                const videoElement = e.target as HTMLVideoElement;
                                videoElement.muted = false; // Unmute the video
                                
                                // Only play if not already playing
                                if (videoElement.paused) {
                                    videoElement.play().catch((error) => {
                                        console.error("Error playing the video:", error);
                                    });
                                }
                            }}
                            onMouseLeave={(e) => {
                                const videoElement = e.target as HTMLVideoElement;
                                videoElement.pause(); // Pause the video
                                videoElement.muted = true; // Mute the video when not hovering
                            }}
                            onCanPlay={() => setIsLoading(false)} // Hide loading when video is ready to play
                            onWaiting={() => setIsLoading(true)} // Show loading when video is buffering
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                        {/* Show loading spinner */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="loader">Loading...</div>
                            </div>
                        )}
                        
                        <video
                            src={previewVideo}
                            className="w-full h-full object-cover hover:cursor-pointer"
                            loop
                            onMouseEnter={(e) => {
                                const videoElement = e.target as HTMLVideoElement;
                                videoElement.muted = false; // Unmute the video
                                
                                // Only play if not already playing
                                if (videoElement.paused) {
                                    videoElement.play().catch((error) => {
                                        console.error("Error playing the video:", error);
                                    });
                                }
                            }}
                            onMouseLeave={(e) => {
                                const videoElement = e.target as HTMLVideoElement;
                                videoElement.pause(); // Pause the video
                                videoElement.muted = true; // Mute the video when not hovering
                            }}
                            onCanPlay={() => setIsLoading(false)} // Hide loading when video is ready to play
                            onWaiting={() => setIsLoading(true)} // Show loading when video is buffering
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-4">
                <Label htmlFor="feedback">Feedback (optional)</Label>
                <Textarea
                  id="feedback"
                  placeholder="Provide feedback or change requests here..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleReEdit}
              disabled={isReEditing || isApproving}
              className="w-full mr-4"
            >
              {isReEditing ? (
                <>
                  <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                  Sending Re-edit Request...
                </>
              ) : (
                <>
                  <XCircle className="mr-2 h-4 w-4" />
                  Request Re-edit
                </>
              )}
            </Button>
            <Button
              onClick={handleApprove}
              disabled={isApproving || isReEditing}
              className="w-full"
            >
              {isApproving ? (
                <>
                  <Upload className="mr-2 h-4 w-4 animate-spin" />
                  Approving & Uploading...
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Approve & Upload
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="text-xl">Editor's Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                I've enhanced the color grading to make the scenery pop more, trimmed some slower sections to improve pacing, and added subtle background music to enhance the mood. Let me know if you'd like any changes!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="text-xl">Collaboration Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <img
                  src={editor1}
                  alt="John Doe's avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="bg-white p-3 rounded-lg shadow">
                  <p className="font-semibold">John Doe (You)</p>
                  <p className="text-sm">Could you make the intro a bit shorter? It feels a bit slow.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-end">
                <div className="bg-blue-100 p-3 rounded-lg shadow">
                  <p className="font-semibold">Jane Smith (Editor)</p>
                  <p className="text-sm">I'll trim it down by about 10 seconds. Is that good?</p>
                </div>
                <img
                  src={editor2}
                  alt="Jane Smith's avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <Input placeholder="Type your message..." className="flex-grow" />
              <Button size="icon">
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About CreatorCollab</h3>
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