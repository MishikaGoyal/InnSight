import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart2, Bot, Calendar, DollarSign, Hotel, LineChart, MessageSquare, PieChart, Rocket, Users } from "lucide-react"
import { Link } from "react-router-dom"

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
//           <div className="w-full container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
//                   Revolutionize Your Hotel Management with Inn-Sight
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
//                   Optimize occupancy, automate pricing, and boost revenue with our AI-powered platform.
//                 </p>
//               </div>
//               <div className="space-x-4">
//                 <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
//                 <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
//             <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//               <Card>
//                 <CardHeader>
//                   <BarChart2 className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>Occupancy Optimization</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Track guests, bookings, and overall occupancy in real-time. Make data-driven decisions to maximize your hotel's capacity.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <LineChart className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>Predictive Modeling</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Forecast occupancy based on historical data. Plan ahead and allocate resources efficiently to meet demand.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <DollarSign className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>Dynamic Pricing</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Automatically adjust room rates based on supply and demand. Maximize revenue during peak times and attract guests during slower periods.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <Rocket className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>AI-Generated Campaigns</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Deploy targeted marketing campaigns automatically when occupancy forecasts are low. Boost bookings with minimal effort.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <PieChart className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>Comprehensive Analytics</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Gain deep insights into your hotel's performance with advanced tracking and reporting features.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <Bot className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>AI-Powered Chatbot</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Provide instant customer support and streamline communication with an intelligent chatbot assistant.</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Empower Your Hotel Management</h2>
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
//               <div className="flex flex-col justify-center space-y-4">
//                 <h3 className="text-2xl font-bold">Auto-Generated E-Commerce Page</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Showcase your rooms and amenities with a beautifully designed, automatically generated booking page. Increase direct bookings and reduce dependency on third-party platforms.
//                 </p>
//               </div>
//               <div className="flex flex-col justify-center space-y-4">
//                 <h3 className="text-2xl font-bold">Intelligent Chatbot Integration</h3>
//                 <p className="text-gray-500 dark:text-gray-400">
//                   Enhance customer experience with our AI-powered chatbot. Answer inquiries, assist with bookings, and provide personalized recommendations 24/7.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features in Development</h2>
//             <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//               <Card>
//                 <CardHeader>
//                   <Users className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>Staff Management</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Optimize staff schedules based on occupancy predictions and streamline internal communications.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <MessageSquare className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>Guest Feedback Analysis</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Automatically analyze guest reviews and feedback to identify areas for improvement and track satisfaction trends.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <Calendar className="h-10 w-10 mb-2 text-primary" />
//                   <CardTitle>Event Integration</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Sync with local event calendars to anticipate demand spikes and adjust pricing and marketing strategies accordingly.</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Hotel Management?</h2>
//                 <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
//                   Join Inn-Sight today and start optimizing your hotel's performance with the power of AI.
//                 </p>
//               </div>
//               <div className="space-x-4">
//                 <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
//                 <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
//                   Request a Demo
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Inn-Sight. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" to='/'>
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" to='/'>
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Revolutionize Your Hotel Management with Inn-Sight
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Optimize occupancy, automate pricing, and boost revenue with our AI-powered platform.
              </p>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {/* Feature Cards */}
              <FeatureCard icon={<BarChart2 />} title="Occupancy Optimization" description="Track guests, bookings, and overall occupancy in real-time." />
              <FeatureCard icon={<LineChart />} title="Predictive Modeling" description="Forecast occupancy based on historical data." />
              <FeatureCard icon={<DollarSign />} title="Dynamic Pricing" description="Automatically adjust room rates based on supply and demand." />
              <FeatureCard icon={<Rocket />} title="AI-Generated Campaigns" description="Deploy targeted marketing campaigns automatically." />
              <FeatureCard icon={<PieChart />} title="Comprehensive Analytics" description="Gain deep insights into your hotel's performance." />
              <FeatureCard icon={<Bot />} title="AI-Powered Chatbot" description="Provide instant customer support with an intelligent assistant." />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Empower Your Hotel Management</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              {/* Empowerment Sections */}
              <EmpowermentSection title="Auto-Generated E-Commerce Page" description="Showcase your rooms and amenities with a beautifully designed booking page." />
              <EmpowermentSection title="Intelligent Chatbot Integration" description="Enhance customer experience with our AI-powered chatbot." />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features in Development</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {/* Development Cards */}
              <FeatureCard icon={<Users />} title="Staff Management" description="Optimize staff schedules based on occupancy predictions." />
              <FeatureCard icon={<MessageSquare />} title="Guest Feedback Analysis" description="Automatically analyze guest reviews." />
              <FeatureCard icon={<Calendar />} title="Event Integration" description="Sync with local event calendars to anticipate demand." />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Hotel Management?</h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Join Inn-Sight today and start optimizing your hotel's performance with the power of AI.
              </p>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Inn-Sight. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline" to='/'>
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline" to='/'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }: any) => (
  <Card>
    <CardHeader>
      {React.cloneElement(icon, { className: "h-10 w-10 mb-2 text-primary" })}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const EmpowermentSection = ({ title, description }: any) => (
  <div className="flex flex-col justify-center space-y-4">
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);
