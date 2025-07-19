import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Calendar } from "lucide-react"

export function StreakProgress() {
  const currentStreak = 7
  const longestStreak = 15
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const completedDays = [true, true, true, false, true, true, true]

  return (
    <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-full">
              <Flame className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Current Streak</h3>
              <p className="text-muted-foreground">Keep it going!</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-orange-500">{currentStreak}</div>
            <p className="text-sm text-muted-foreground">days</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">This Week</span>
            <Badge variant="outline">
              <Calendar className="h-3 w-3 mr-1" />
              Longest: {longestStreak} days
            </Badge>
          </div>

          <div className="flex justify-between">
            {weekDays.map((day, index) => (
              <div key={day} className="flex flex-col items-center space-y-2">
                <span className="text-xs text-muted-foreground">{day}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    completedDays[index]
                      ? "bg-green-500 text-white"
                      : "bg-muted border-2 border-dashed border-muted-foreground/30"
                  }`}
                >
                  {completedDays[index] ? "✓" : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
