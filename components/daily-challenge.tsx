"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Trophy, Star, CheckCircle } from "lucide-react"

export function DailyChallenge() {
  const [timeLeft, setTimeLeft] = useState(86400) // 24 hours in seconds
  const [isCompleted, setIsCompleted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleComplete = () => {
    setIsCompleted(true)
    setProgress(100)
  }

  return (
    <Card className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />

      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Today's Challenge</CardTitle>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-6">
        {!isCompleted ? (
          <>
            <div className="space-y-4">
              <div className="p-4 bg-background/50 rounded-lg border-2 border-dashed border-primary/20">
                <h3 className="text-xl font-semibold mb-2">💡 Share a helpful tip about your best skill today!</h3>
                <p className="text-muted-foreground">
                  Create a post sharing one valuable tip or insight about a skill you're good at. Help your fellow
                  students learn something new!
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="space-x-1">
                    <Trophy className="h-3 w-3" />
                    <span>50 Points</span>
                  </Badge>
                  <Badge variant="outline" className="space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Streak Bonus</span>
                  </Badge>
                </div>
                <Button
                  onClick={handleComplete}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Complete Challenge
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4 py-8">
            <div className="animate-bounce">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-green-600">Challenge Completed! 🎉</h3>
            <p className="text-muted-foreground">Great job! You've earned 50 points and maintained your streak.</p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">+50 Points</Badge>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                Streak Maintained
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
