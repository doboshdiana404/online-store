import { useMemo } from 'react';

import { useFormContext, Controller } from 'react-hook-form';

import Select from '@/ui/Select/Select';

import s from './NovaPoshtaSelects.module.css';

import {
  useGetAreasQuery,
  useGetCitiesQuery,
  useGetWarehousesQuery,
} from '@/redux/services/novaPoshtaApi';

const NovaPoshtaSelects = () => {
  const { control, setValue, watch } = useFormContext();

  const areaRef = watch('areaRef');
  const cityRef = watch('cityRef');
  const warehouseRef = watch('warehouseRef');

  const { data: areasData = [], isLoading: isLoadingAreas } =
    useGetAreasQuery(undefined);
  const { data: citiesData = [], isLoading: isLoadingCities } =
    useGetCitiesQuery(areaRef, { skip: !areaRef });
  const { data: warehousesData = [], isLoading: isLoadingWarehouses } =
    useGetWarehousesQuery(cityRef, { skip: !cityRef });

  const areasOptions = useMemo(
    () => areasData.map((a) => a.Description),
    [areasData]
  );
  const selectedArea = useMemo(
    () => areasData.find((a) => a.Ref === areaRef)?.Description || '',
    [areasData, areaRef]
  );

  const citiesOptions = useMemo(
    () => citiesData.map((c) => c.Description),
    [citiesData]
  );
  const selectedCity = useMemo(
    () => citiesData.find((c) => c.Ref === cityRef)?.Description || '',
    [citiesData, cityRef]
  );

  const warehousesOptions = useMemo(
    () => warehousesData.map((w) => w.Description),
    [warehousesData]
  );
  const selectedWarehouse = useMemo(
    () => warehousesData.find((w) => w.Ref === warehouseRef)?.Description || '',
    [warehousesData, warehouseRef]
  );

  const handleAreaChange = (selected: string) => {
    const selectedRef =
      areasData.find((a) => a.Description === selected)?.Ref || '';
    if (selectedRef !== areaRef) {
      setValue('areaRef', selectedRef);
      setValue('cityRef', '');
      setValue('warehouseRef', '');
    }
  };

  const handleCityChange = (selected: string) => {
    const selectedRef =
      citiesData.find((c) => c.Description === selected)?.Ref || '';
    if (selectedRef !== cityRef) {
      setValue('cityRef', selectedRef);
      setValue('warehouseRef', '');
    }
  };

  const handleWarehouseChange = (selected: string) => {
    const selectedRef =
      warehousesData.find((w) => w.Description === selected)?.Ref || '';
    if (selectedRef !== warehouseRef) {
      setValue('warehouseRef', selectedRef);
    }
  };

  return (
    <div className={s.choiseAddress}>
      <div className={s.selectWrap}>
        <label className={s.addressSelectLabel}>Select the region</label>
        <Controller
          name="areaRef"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={selectedArea}
              options={areasOptions}
              onChange={handleAreaChange}
              variant="select"
              placeholder="Region"
              isDisabled={isLoadingAreas}
            />
          )}
        />
      </div>

      <div className={s.selectWrap}>
        <label className={s.addressSelectLabel}>Select the city</label>
        <Controller
          name="cityRef"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={selectedCity}
              options={citiesOptions}
              onChange={handleCityChange}
              variant="select"
              placeholder="City"
              isDisabled={!areaRef || isLoadingCities}
            />
          )}
        />
      </div>

      <div className={s.selectWrap}>
        <label className={s.addressSelectLabel}>
          Select the post office number
        </label>
        <Controller
          name="warehouseRef"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={selectedWarehouse}
              options={warehousesOptions}
              onChange={handleWarehouseChange}
              variant="select"
              placeholder="Branch"
              isDisabled={!cityRef || isLoadingWarehouses}
            />
          )}
        />
      </div>
    </div>
  );
};

export default NovaPoshtaSelects;
