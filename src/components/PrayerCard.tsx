
import { useState } from "react";
import { Edit2, Trash2, Save, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface PrayerCardProps {
  id: string;
  title: string;
  content: string;
  date: string;
  onUpdate: (id: string, title: string, content: string) => void;
  onDelete: (id: string) => void;
}

const PrayerCard = ({ id, title: initialTitle, content: initialContent, date, onUpdate, onDelete }: PrayerCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onUpdate(id, title, content);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this prayer?")) {
      onDelete(id);
    }
  };

  return (
    <Card className="transition-shadow hover:shadow-md h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-devotional-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            >
              {isEditing ? <Save className="h-4 w-4" /> : <Edit2 className="h-4 w-4" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50" 
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full font-cormorant text-xl font-semibold text-devotional-800 mt-2 p-2 border rounded"
          />
        ) : (
          <h3 className="font-cormorant text-xl font-semibold text-devotional-800 mt-2">
            {title}
          </h3>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        {isEditing ? (
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-40"
          />
        ) : (
          <p className="text-devotional-600 whitespace-pre-wrap">
            {content}
          </p>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        {isEditing && (
          <div className="flex gap-2 w-full">
            <Button 
              variant="outline" 
              className="w-1/2"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button 
              className="w-1/2 bg-devotional-600 hover:bg-devotional-700"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PrayerCard;
