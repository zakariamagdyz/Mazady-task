import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SEARCH_OPTIONS = [
  { value: "1", label: "مزاد مباشر" },
  { value: "2", label: "مزاد عام" },
  { value: "3", label: "اسم البائع" },
  { value: "4", label: "مزاد مباشر متعدد" },
  { value: "5", label: "مزاد عام متعدد" },
  { value: "6", label: "رقم المنتج" },
];

const SearchTypeSelector = () => {
  return (
    <article className="text-primary">
      <Select defaultValue="4">
        <SelectTrigger className="w-[170px] justify-start gap-2 rounded-none border-0 border-l-2 border-white bg-transparent">
          <SelectValue placeholder="اختر نوع البحث" />
        </SelectTrigger>
        <SelectContent className="bg-[#FFF4E8]">
          <SelectGroup>
            {SEARCH_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </article>
  );
};

export default SearchTypeSelector;
