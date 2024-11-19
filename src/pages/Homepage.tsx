import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Edit, Youtube, Users } from 'lucide-react'
import creatorEditor from '@/assets/creator-editor.jpeg'
import projectUpload from '@/assets/project-upload.jpeg'
import editorMatching from '@/assets/editor-matching.jpeg'
import review from '@/assets/review.jpeg'
import publish from '@/assets/publish.jpeg'
import dashboard from '@/assets/dashboard.jpeg'
import editingDashboard from '@/assets/editing-dashboard.jpeg'
import travelBlog from '@/assets/travel-blog.jpeg'
import techReview from '@/assets/tech-review.jpeg'
import cooking from '@/assets/cooking.jpeg'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom"

function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CreatorFlow logo">
      <rect width="40" height="40" rx="8" fill="#3B82F6"/>
      <path d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10ZM18 24V16L24 20L18 24Z" fill="white"/>
      <path d="M32 14.5C32 15.8807 30.8807 17 29.5 17C28.1193 17 27 15.8807 27 14.5C27 13.1193 28.1193 12 29.5 12C30.8807 12 32 13.1193 32 14.5Z" fill="#10B981"/>
    </svg>
  )
}

export function HomePage() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div onClick={() => navigate('/')} className="flex items-center space-x-3 hover:cursor-pointer">
            <Logo />
            <h1 className="text-3xl font-bold text-gray-900">CreatorFlow</h1>
          </div>
          <SignedOut>
          <nav>
            <SignInButton>
                <Button variant="ghost" className="mr-4">Log In</Button>
            </SignInButton>
            <SignUpButton>
                <Button>Sign Up</Button>
            </SignUpButton>
          </nav>
          </SignedOut>
          <SignedIn>
          <nav>
              <ul className="flex space-x-4">
                <li><button onClick={() => navigate('/creator-dashboard')} className="text-gray-600 hover:text-gray-900">Dashboard</button></li>
                <li><button onClick={() => navigate('/projects')} className="text-gray-600 hover:text-gray-900">My Projects</button></li>
                <li><button onClick={() => navigate('/editors')} className="text-gray-600 hover:text-gray-900">Find Editors</button></li>
                <UserButton />
              </ul>
            </nav>
          </SignedIn>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Collaborate with Top Editors
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Streamline your content creation process. Upload, edit, and publish with ease.
            </p>
            <div className="mt-8">
              <Button size="lg" className="mr-4">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>

          <div className="mt-20 relative">
            <img
              src={creatorEditor}
              alt="A creator and editor working together on a video project, showcasing the collaborative nature of CreatorFlow"
              width={800}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent rounded-lg"></div>
          </div>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Upload className="h-10 w-10 text-primary" />}
                title="Upload Project"
                description="Creators upload their projects and specify editing requirements."
                img={projectUpload}
                alt="Screenshot of the project upload interface"
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Assign Editor"
                description="Choose from our pool of skilled editors or let us match you."
                img={editorMatching}
                alt="Illustration of the editor matching system"
              />
              <FeatureCard
                icon={<Edit className="h-10 w-10 text-primary" />}
                title="Edit & Review"
                description="Editors work their magic and submit for your review."
                img={review}
                alt="Screenshot of the editing and review dashboard"
              />
              <FeatureCard
                icon={<Youtube className="h-10 w-10 text-primary" />}
                title="Publish"
                description="Approve with one click and we'll upload to YouTube automatically."
                img={publish}
                alt="Illustration of the one-click publishing process"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">For Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={dashboard}
                  alt="Screenshot of the CreatorFlow dashboard for content creators, showing project management and editor collaboration features"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <ul className="list-disc pl-5 space-y-2">
                  <li>Upload your projects easily</li>
                  <li>Find the perfect editor for your style</li>
                  <li>Review and approve edits quickly</li>
                  <li>Automatic YouTube upload upon approval</li>
                </ul>
                <SignInButton>
                    <Button className="mt-4">I'm a Creator</Button>
                </SignInButton>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">For Editors</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={editingDashboard}
                  alt="Screenshot of the CreatorFlow workspace for video editors, showcasing the editing tools and project management features"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access a wide range of projects</li>
                  <li>Showcase your editing skills</li>
                  <li>Collaborate with top creators</li>
                  <li>Grow your portfolio and earnings</li>
                </ul>
                <Button className="mt-4">I'm an Editor</Button>
              </CardContent>
            </Card>
          </div>
          
          <SignedOut>
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Content?</h3>
            <p className="text-xl text-gray-500 mb-8">Join our community of creators and editors today.</p>
            <SignUpButton>
                <Button size="lg">Sign Up Now</Button>
            </SignUpButton>
          </div>
          </SignedOut>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Featured Collaborations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-4">
                  <img
                    src={travelBlog}
                    alt="Screenshot of a travel vlog collaboration project, showing before and after editing"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">Epic Travel Vlog</h4>
                  <p className="text-gray-500">Creator: Adventure Awaits</p>
                  <p className="text-gray-500">Editor: Cinematic Edits</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    src={techReview}
                    alt="Screenshot of a tech review collaboration project, showcasing improved visual effects and graphics"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">Gadget Unboxing Extravaganza</h4>
                  <p className="text-gray-500">Creator: TechEnthusiast</p>
                  <p className="text-gray-500">Editor: VisualFX Master</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    src={cooking}
                    alt="Screenshot of a cooking show collaboration project, demonstrating enhanced production quality"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">Gourmet Delights</h4>
                  <p className="text-gray-500">Creator: Chef's Table</p>
                  <p className="text-gray-500">Editor: Food Film Pro</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="hover:text-gray-300">Tutorials</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2024 CreatorFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  img: string;
  alt: string;
}

function FeatureCard({ icon, title, description, img, alt }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="text-center pt-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <CardTitle className="mb-2">{title}</CardTitle>
        <p className="text-gray-500 mb-4">{description}</p>
        <img
          src={img}
          alt={alt}
          width={200}
          height={150}
          className="rounded-lg mx-auto"
        />
      </CardContent>
    </Card>
  )
}