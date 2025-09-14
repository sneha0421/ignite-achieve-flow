import { useState } from "react";
import Header from "@/components/Header";
import StudentProfile from "@/components/StudentProfile";
import ActivityFeed from "@/components/ActivityFeed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Activity, Users, BarChart } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="feed" className="gap-2">
                  <Activity className="h-4 w-4" />
                  <span className="hidden sm:inline">Feed</span>
                </TabsTrigger>
                <TabsTrigger value="profile" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="network" className="gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Network</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="gap-2">
                  <BarChart className="h-4 w-4" />
                  <span className="hidden sm:inline">Analytics</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="mt-0">
                <ActivityFeed />
              </TabsContent>

              <TabsContent value="profile" className="mt-0">
                <StudentProfile />
              </TabsContent>

              <TabsContent value="network" className="mt-0">
                <div className="text-center py-16">
                  <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Network Coming Soon</h3>
                  <p className="text-muted-foreground">Connect with peers, faculty, and industry professionals.</p>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-0">
                <div className="text-center py-16">
                  <BarChart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">Track your academic progress and engagement metrics.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions */}
              <div className="academic-card p-6">
                <h3 className="font-semibold mb-4 text-foreground">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors text-sm">
                    📝 Create Activity Post
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors text-sm">
                    📊 View Portfolio
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors text-sm">
                    🎯 Set Goals
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-muted/50 transition-colors text-sm">
                    👥 Find Study Groups
                  </button>
                </div>
              </div>

              {/* Recent Notifications */}
              <div className="academic-card p-6">
                <h3 className="font-semibold mb-4 text-foreground">Recent Updates</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="text-foreground">Sarah liked your post</p>
                      <p className="text-muted-foreground text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="h-2 w-2 bg-success rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="text-foreground">Activity verified by faculty</p>
                      <p className="text-muted-foreground text-xs">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="h-2 w-2 bg-warning rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="text-foreground">New internship opportunity</p>
                      <p className="text-muted-foreground text-xs">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
