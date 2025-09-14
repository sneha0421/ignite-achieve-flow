import { Badge, MapPin, Calendar, ExternalLink, Star, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const StudentProfile = () => {
  const skills = ["React", "Machine Learning", "Python", "UI/UX Design", "Data Science"];
  const achievements = [
    { title: "Dean's List", type: "Academic", verified: true },
    { title: "Hackathon Winner", type: "Competition", verified: true },
    { title: "Research Publication", type: "Research", verified: false },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="profile-card">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-primary/20">
              <AvatarImage src="/api/placeholder/150/150" alt="Alex Chen" />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">AC</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  Alex Chen
                  <Badge className="verified-badge">
                    <Award className="h-3 w-3" />
                    Verified
                  </Badge>
                </h2>
                <p className="text-lg text-muted-foreground">Computer Science Engineering</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    MIT Campus, Boston
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Class of 2025
                  </span>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed">
                Passionate CS student specializing in AI/ML and full-stack development. 
                Active in research, hackathons, and community tech initiatives.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button className="bg-gradient-primary border-0">
                View Portfolio
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Stats */}
        <Card className="academic-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Academic Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall GPA</span>
                <span className="font-semibold">3.8/4.0</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-xs text-muted-foreground">Activities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">12</div>
                <div className="text-xs text-muted-foreground">Verified</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-warning">8</div>
                <div className="text-xs text-muted-foreground">Awards</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="academic-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-success" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.type}</p>
                  </div>
                </div>
                {achievement.verified && (
                  <Badge className="verified-badge text-xs">
                    Verified
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentProfile;