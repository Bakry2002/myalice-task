import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/use-language";
import en from "../assets/lang/en.json";
import ar from "../assets/lang/ar.json";
interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
export const SearchInput = ({
  searchQuery,
  setSearchQuery,
}: SearchInputProps) => {
  const { language } = useLanguage();
  const translations = language === "EN" ? en : ar;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
  };

  return (
    <div className="w-full">
      <Input
        placeholder={translations.searchInputPlaceholder}
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};
