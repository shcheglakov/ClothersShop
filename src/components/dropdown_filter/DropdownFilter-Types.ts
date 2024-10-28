export interface IDropdownFilter {
    title: string;
    options: string[];
    onSelect: (option: string) => void;
}