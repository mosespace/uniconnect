'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, ImageIcon, Briefcase } from 'lucide-react';

export function PostCreationModal() {
  const [postType, setPostType] = useState('normal');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('');
  const [skillLevel, setSkillLevel] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'marketplace':
        return 'from-green-500 to-emerald-500';
      case 'skill':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case 'marketplace':
        return 'FOR SALE';
      case 'skill':
        return 'SKILL OFFERED';
      default:
        return 'NORMAL POST';
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPrice('');
    setCondition('');
    setSkillLevel('');
  };

  const handleSubmit = () => {
    // Handle post creation
    setIsOpen(false);
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/80 z-50">
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Post Type Selection */}
          <div className="space-y-3">
            <Label>Post Type</Label>
            <div className="grid grid-cols-3 gap-3">
              <Button
                variant={postType === 'normal' ? 'default' : 'outline'}
                onClick={() => setPostType('normal')}
                className="h-16 flex-col space-y-1"
              >
                <div className="text-lg">📝</div>
                <span className="text-xs">Normal Post</span>
              </Button>
              <Button
                variant={postType === 'marketplace' ? 'default' : 'outline'}
                onClick={() => setPostType('marketplace')}
                className="h-16 flex-col space-y-1"
              >
                <ImageIcon className="h-5 w-5" />
                <span className="text-xs">Marketplace</span>
              </Button>
              <Button
                variant={postType === 'skill' ? 'default' : 'outline'}
                onClick={() => setPostType('skill')}
                className="h-16 flex-col space-y-1"
              >
                <Briefcase className="h-5 w-5" />
                <span className="text-xs">Skill Offer</span>
              </Button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">
                {postType === 'marketplace'
                  ? 'Item Title'
                  : postType === 'skill'
                  ? 'Skill Name'
                  : 'Post Title'}
              </Label>
              <Input
                id="title"
                placeholder={
                  postType === 'marketplace'
                    ? 'e.g., MacBook Pro 2021 - Perfect Condition'
                    : postType === 'skill'
                    ? 'e.g., Web Development Tutoring'
                    : "What's on your mind?"
                }
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder={
                  postType === 'marketplace'
                    ? 'Describe the item, its condition, and any important details...'
                    : postType === 'skill'
                    ? 'Describe your skill, experience level, and what you can help with...'
                    : 'Share your thoughts, experiences, or ask questions...'
                }
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[120px]"
              />
            </div>

            {/* Marketplace-specific fields */}
            {postType === 'marketplace' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={condition} onValueChange={setCondition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Skill-specific fields */}
            {postType === 'skill' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="skill-price">Rate ($/hour)</Label>
                  <Input
                    id="skill-price"
                    type="number"
                    placeholder="25.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skill-level">Experience Level</Label>
                  <Select value={skillLevel} onValueChange={setSkillLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Media Upload */}
            <div className="space-y-2">
              <Label>Media</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors cursor-pointer">
                <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload images or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Live Preview */}
          {(title || description) && (
            <div className="space-y-2">
              <Label>Preview</Label>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="You"
                      />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">Your Name</span>
                        <Badge
                          className={`bg-gradient-to-r ${getPostTypeColor(
                            postType
                          )} text-white border-0`}
                        >
                          {getPostTypeLabel(postType)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Just now</p>
                    </div>
                  </div>

                  {title && (
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  )}
                  {description && (
                    <p className="text-muted-foreground mb-3">{description}</p>
                  )}

                  {price && (
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-primary">
                        ${price}
                        {postType === 'skill' && (
                          <span className="text-sm font-normal"> /hour</span>
                        )}
                      </span>
                    </div>
                  )}

                  {condition && (
                    <Badge variant="outline" className="mb-3">
                      {condition.charAt(0).toUpperCase() +
                        condition.slice(1).replace('-', ' ')}
                    </Badge>
                  )}

                  {skillLevel && (
                    <Badge variant="outline" className="mb-3">
                      {skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1)}{' '}
                      Level
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!title.trim() || !description.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Create Post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
