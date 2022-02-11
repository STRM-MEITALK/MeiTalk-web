import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import { getCategoryList } from '@slice/utilSlice';
import RequestStatus from '@lib/RequestStatus';
import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';

const useInnerWidth = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState<IOptionType>({ label: 'Film & Animation', value: 1 });
  const [categoryOptions, setCategoryOptions] = useState<IOptionType[]>();

  const { categoryList, language } = useSelector(({ util, language }: RootState) => ({
    categoryList: util.categoryList,
    language: language.language,
  }));

  useEffect(() => {
    dispatch(getCategoryList({ lang: language }));
  }, [language]);

  useEffect(() => {
    if (categoryList.status === RequestStatus.SUCCESS) {
      const tempOptions: IOptionType[] = categoryList?.data?.map((option) => ({
        label: option.name,
        value: option.num,
      }));
      setCategoryOptions(tempOptions);
    }
  }, [categoryList]);

  useEffect(() => {
    if (categoryOptions) {
      setCategory(categoryOptions[category.value - 1]);
    }
  }, [categoryOptions]);

  return {
    category,
    categoryOptions,
    setCategory,
  };
};

export default useInnerWidth;
