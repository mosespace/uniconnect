"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Sparkles } from "lucide-react"

const rewards = [
  "Profile Boost",
  "50 Points",
  "Discount Code",
  "Verified Badge",
  "100 Points",
  "Free Promotion",
  "Skill Badge",
  "Premium Week",
]

export function SpinWheel() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [hasSpunToday, setHasSpunToday] = useState(false)
  const [wonReward, setWonReward] = useState<string | null>(null)
  const [timeUntilNextSpin, setTimeUntilNextSpin] = useState(18 * 3600) // 18 hours

  const handleSpin = () => {
    setIsSpinning(true)

    setTimeout(() => {
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)]
      setWonReward(randomReward)
      setIsSpinning(false)
      setHasSpunToday(true)
    }, 3000)
  }

  const formatTimeUntilNext = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
  }

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20" />

      <CardContent className="relative p-8">
        <div className="text-center space-y-6">
          {!wonReward ? (
            <>
              {/* Spin Wheel */}
              <div className="relative mx-auto w-64 h-64">
                <div
                  className={`w-full h-full rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-2xl ${
                    isSpinning ? "animate-spin" : ""
                  } transition-all duration-3000`}
                >
                  <div className="w-56 h-56 rounded-full bg-background flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Gift className="h-12 w-12 mx-auto text-orange-500" />
                      <p className="font-bold text-lg">Daily Spin</p>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        {rewards.slice(0, 4).map((reward, index) => (
                          <div key={index} className="p-1 bg-muted rounded text-center">
                            {reward}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pointer */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-orange-500"></div>
                </div>
              </div>

              {/* Spin Button */}
              <div className="space-y-4">
                {!hasSpunToday ? (
                  <Button
                    onClick={handleSpin}
                    disabled={isSpinning}
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-bold"
                  >
                    {isSpinning ? (
                      <>
                        <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                        Spinning...
                      </>
                    ) : (
                      <>
                        <Gift className="h-5 w-5 mr-2" />
                        Spin Now!
                      </>
                    )}
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button disabled size="lg" className="px-8 py-3 text-lg">
                      <Clock className="h-5 w-5 mr-2" />
                      Already Spun Today
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Next spin available in {formatTimeUntilNext(timeUntilNextSpin)}
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Win Animation */
            <div className="space-y-6 py-8">
              <div className="animate-bounce">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Gift className="h-12 w-12 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text">
                  Congratulations! 🎉
                </h3>
                <p className="text-muted-foreground">You won:</p>
              </div>

              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg px-6 py-2">
                {wonReward}
              </Badge>

              <Button onClick={() => setWonReward(null)} variant="outline" className="mt-4">
                Claim Reward
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
