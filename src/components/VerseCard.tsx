
import { Share2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface VerseCardProps {
  verse: string;
  reference: string;
  background: string;
}

const VerseCard = ({ verse, reference, background }: VerseCardProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: reference,
        text: `"${verse}" - ${reference}`,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(`"${verse}" - ${reference}`)
        .then(() => {
          toast.success("Sloka copied to clipboard!");
        })
        .catch(console.error);
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col bg-no-repeat bg-cover relative group"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${background})` }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-black/60 transition-opacity duration-300" />
      <CardContent className="flex-grow flex items-center justify-center p-8 z-10">
        <div className="text-center">
          <p className="verse-text text-white mb-4 drop-shadow-md">
            "{verse}"
          </p>
          <p className="text-white/90 font-medium">
            {reference}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-6 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button 
          variant="outline" 
          className="mx-auto border-white/30 bg-black/30 text-white hover:bg-black/50 hover:text-white"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VerseCard;
