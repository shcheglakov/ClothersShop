import { useQuery } from '@tanstack/react-query'
import styles from './Filters.module.scss'
import { clotherService } from '../../services/clother.service'
import { useState } from 'react';
import { IClothers } from '../../pages/home/types';
import CategoryListItems from '../category_list_items/CategoryListItems';
import DropdownFilter from '../dropdown_filter/DropdownFilter';


export default function Filters() {
    const { data } = useQuery({
        queryKey: ['clother list'],
        queryFn: () => clotherService.getClothers(),
    });

    const types = Array.from(new Set(data?.map((clothe) => clothe.type) || []));
  
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleTypeSelect = (type: string) => {
        setSelectedType(type);
    }

    const filteredData = data?.filter((clothe: IClothers) => {
        if(selectedType && !clothe.type.includes(selectedType)) return false;
        return true
    })

    return (
    <div  style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gridTemplateRows: '1f',
        gridColumnGap: '20px',
        gridRowGap: '0px',
        paddingLeft: '100px',
        paddingRight: '100px',
        alignItems: 'flex-start'
    }}>
        <div className={styles.filters_main}>
            <div>
                <p>Filters</p>
            </div>
            <div className={styles.underline}></div>
            <DropdownFilter title='Категория' options={types} onSelect={handleTypeSelect} />
            <div className={styles.underline}></div>
            <div>
                Price
            </div>
            <div className={styles.underline}></div>
            <div>
                Colors
            </div>
            <div className={styles.underline}></div>
            <div>
                Sizes
            </div>
            <div className={styles.underline}></div>
            <div>
                Dress Style
            </div>
            <button>
                Apply Filter
            </button>
        </div>
        <CategoryListItems data={filteredData}/>
    </div>
  )
}
