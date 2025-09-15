import { Bell, Search, Plus, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { toast } = useToast();

  const handleCreatePost = () => {
    toast({
      title: "Create Post",
      description: "Connect to Supabase to enable post creation functionality!",
    });
  };

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "3 new notifications - connect Supabase for real-time updates!",
    });
  };

  const handleSettings = () => {
    toast({
      title: "Settings",
      description: "Connect Supabase to enable user settings and preferences!",
    });
  };

  const handleProfile = () => {
    toast({
      title: "Profile Menu",
      description: "Connect Supabase to enable user authentication and profiles!",
    });
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
            <span className="text-white font-bold text-sm">IA</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Ignite Achieve</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search students, activities, skills..."
              className="pl-10 bg-muted/50 border-border/50 focus:bg-background"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="gap-2" onClick={handleCreatePost}>
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Create Post</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative" onClick={handleNotifications}>
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </Button>

          <Button variant="ghost" size="sm" onClick={handleSettings}>
            <Settings className="h-5 w-5" />
          </Button>

          <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all" onClick={handleProfile}>
            <AvatarImage src="/api/placeholder/32/32" alt="Profile" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;