import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Facebook, Instagram, Image as ImageIcon, Type, Users, Wand2, Plus, Check, X, Globe } from "lucide-react"

export default function CampaignManager() {
  const [customCampaignName, setCustomCampaignName] = useState("")
  const [customCampaignDescription, setCustomCampaignDescription] = useState("")
  const [customCampaignType, setCustomCampaignType] = useState("ad")
  const [customCampaignPlatform, setCustomCampaignPlatform] = useState("meta")

  const aiSuggestions = [
    {
      id: 1,
      name: "Summer Escape",
      description: "Beat the heat with our cool summer packages!",
      image: "https://placeholder.com/300x200",
      type: "ad",
      platform: "meta",
    },
    {
      id: 2,
      name: "Cozy Autumn Vibes",
      description: "Experience the beauty of fall in our cozy rooms. #AutumnRetreat",
      image: "https://placeholder.com/300x300",
      type: "social",
      platform: "instagram",
    },
    {
      id: 3,
      name: "Winter Wonderland",
      description: "Ski, sip cocoa, and enjoy winter magic with us.",
      image: "https://placeholder.com/300x200",
      type: "ad",
      platform: "google",
    },
  ]

  const activeCampaigns = [
    {
      id: 1,
      name: "Summer Escape",
      description: "Beat the heat with our cool summer packages!",
      image: "https://placeholder.com/200x100",
      isActive: true,
      type: "ad",
      platform: "meta",
      impressions: 15000,
      clicks: 750,
      conversions: 50,
    },
    {
      id: 2,
      name: "Sunset Views",
      description: "Enjoy breathtaking sunsets from our rooftop bar. #SunsetViews #CocktailHour",
      image: "https://placeholder.com/300x300",
      isActive: true,
      type: "social",
      platform: "instagram",
      likes: 1200,
      comments: 89,
      shares: 45,
    },
    {
      id: 3,
      name: "Business Traveler Special",
      description: "Comfortable stays for your business trips.",
      image: "https://placeholder.com/200x100",
      isActive: false,
      type: "ad",
      platform: "google",
      impressions: 10000,
      clicks: 500,
      conversions: 30,
    },
  ]

  const handleDeploySuggestion = (suggestion) => {
    console.log("Deploying suggestion:", suggestion)
    // Logic to deploy the suggestion would go here
  }

  const handleCreateCustomCampaign = (e) => {
    e.preventDefault()
    console.log("Creating custom campaign:", { customCampaignName, customCampaignDescription, customCampaignType, customCampaignPlatform })
    // Logic to create a custom campaign would go here
    setCustomCampaignName("")
    setCustomCampaignDescription("")
    setCustomCampaignType("ad")
    setCustomCampaignPlatform("meta")
  }

  const handleToggleCampaign = (campaignId) => {
    console.log("Toggling campaign:", campaignId)
    // Logic to toggle campaign on/off would go here
  }

  const chartConfig = {
    impressions: {
      label: "Impressions",
      color: "hsl(330, 70%, 50%)",
    },
    clicks: {
      label: "Clicks",
      color: "hsl(270, 70%, 50%)",
    },
    conversions: {
      label: "Conversions",
      color: "hsl(200, 70%, 50%)",
    },
    likes: {
      label: "Likes",
      color: "hsl(45, 70%, 50%)",
    },
    comments: {
      label: "Comments",
      color: "hsl(180, 70%, 50%)",
    },
    shares: {
      label: "Shares",
      color: "hsl(90, 70%, 50%)",
    },
  }

  const renderPlatformIcon = (platform) => {
    switch (platform) {
      case "meta":
        return <Facebook className="h-4 w-4 text-blue-600" />
      case "instagram":
        return <Instagram className="h-4 w-4 text-pink-600" />
      case "google":
        return (
          <svg className="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.18 10.382L12.726 4.999v3.744l5.792 3.219 3.662-1.58zm-9.454-8.98L1.566 9.706l3.694 1.59 7.466-4.145V3.401zM.829 11.944l10.831 6.009v-3.738l-6.004-3.334L.829 11.944zm11.831 6.009l10.34-5.669-3.678-1.59-6.662 3.696v3.563z" />
          </svg>
        )
      default:
        return <Globe className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8 md:py-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Campaign Management</h1>
          <p className="text-lg md:text-xl text-gray-600">Optimize your hotel marketing with AI-generated campaigns and social media posts</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-gray-800">AI-Generated Campaign Suggestions</CardTitle>
              <CardDescription>Review and deploy AI-created campaigns and social media posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiSuggestions.map((suggestion) => (
                  <Card key={suggestion.id} className="overflow-hidden">
                    <img
                      src={suggestion.image}
                      alt={suggestion.name}
                      className="w-full h-[200px] object-cover"
                    />
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{suggestion.name}</h3>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                            {suggestion.type === "ad" ? "Ad" : "Social Post"}
                          </span>
                          {renderPlatformIcon(suggestion.platform)}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{suggestion.description}</p>
                      <Button onClick={() => handleDeploySuggestion(suggestion)} className="w-full">
                        <Wand2 className="mr-2 h-4 w-4" />
                        Deploy {suggestion.type === "ad" ? "Campaign" : "Post"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-gray-800">Create Custom Campaign or Post</CardTitle>
              <CardDescription>Design your own campaign or social media post</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateCustomCampaign} className="space-y-4">
                <div>
                  <Label htmlFor="campaign-name">Campaign/Post Name</Label>
                  <Input
                    id="campaign-name"
                    value={customCampaignName}
                    onChange={(e) => setCustomCampaignName(e.target.value)}
                    placeholder="Enter campaign or post name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="campaign-description">Description/Content</Label>
                  <Textarea
                    id="campaign-description"
                    value={customCampaignDescription}
                    onChange={(e) => setCustomCampaignDescription(e.target.value)}
                    placeholder="Describe your campaign or write your post content"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="campaign-type">Type</Label>
                    <Select value={customCampaignType} onValueChange={setCustomCampaignType}>
                      <SelectTrigger id="campaign-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ad">Ad Campaign</SelectItem>
                        <SelectItem value="social">Social Media Post</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="campaign-platform">Platform</Label>
                    <Select value={customCampaignPlatform} onValueChange={setCustomCampaignPlatform}>
                      <SelectTrigger id="campaign-platform">
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="meta">Meta Ads</SelectItem>
                        <SelectItem value="google">Google Ads</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Create {customCampaignType === "ad" ? "Campaign" : "Post"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-gray-800">Active Campaigns and Posts</CardTitle>
              <CardDescription>Manage your ongoing campaigns and social media posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activeCampaigns.map((campaign) => (
                  <div key={campaign.id} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow">
                    <img
                      src={campaign.image}
                      alt={campaign.name}
                      className="w-full sm:w-[100px] h-[100px] rounded-md object-cover"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{campaign.name}</h3>
                        <div className="flex items-center space-x-1">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                            {campaign.type === "ad" ? "Ad" : "Social Post"}
                          </span>
                          {renderPlatformIcon(campaign.platform)}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{campaign.description}</p>
                    </div>
                    <div className="sm:text-right">
                      <Switch
                        checked={campaign.isActive}
                        onCheckedChange={() => handleToggleCampaign(campaign.id)}
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        {campaign.isActive ? "Active" : "Inactive"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:  0.8 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-gray-800">Performance Metrics</CardTitle>
              <CardDescription>Track the success of your campaigns and posts</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="impressions" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                  <TabsTrigger value="impressions">Impressions</TabsTrigger>
                  <TabsTrigger value="clicks">Clicks</TabsTrigger>
                  <TabsTrigger value="conversions">Conversions</TabsTrigger>
                  <TabsTrigger value="likes">Likes</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="shares">Shares</TabsTrigger>
                </TabsList>
                {Object.keys(chartConfig).map((metric) => (
                  <TabsContent key={metric} value={metric}>
                    <ChartContainer
                      config={{
                        [metric]: chartConfig[metric],
                      }}
                      className="h-[300px] sm:h-[400px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={activeCampaigns.filter(campaign => campaign[metric] !== undefined)}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" stroke="#888888" />
                          <YAxis stroke="#888888" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey={metric} fill={chartConfig[metric].color} name={chartConfig[metric].label} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}