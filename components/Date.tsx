'use client';

import React, {
    useEffect,
    useState,
    useRef,
    useMemo,
} from 'react';
import DatePicker from '@scottish-government/design-system/src/components/date-picker/date-picker';

import classNames from '../lib/classNames';

import Input from './Input';
import Label from './Label';

/**
 * @param {ScotGov.Component.Field.Input} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const DateInput:React.FC<ScotGov.Component.Field.Date> = function DateInput({
    className,
    name,
    id,
    multiple = false,
    defaultValue,
    disabledDates,
    maxDate: maxDateRaw,
    minDate: minDateRaw,
    error,
}) {
    /**
     * @param {Date} date - The date string
     * @returns {string} - The ISO date string, as a UTC date
     */
    const dateToIsoString = (date:Date):string => {
        const offset = date.getTimezoneOffset();
        const newDate = new Date(date.getTime() - (offset * 60 * 1000));

        return newDate.toISOString().split('T')[0];
    };

    const parseDateString = (date:string):Date => {
        let d = new Date(date);

        if (d instanceof Date && !Number.isNaN(d.getTime())) {
            return d;
        }

        d = new Date();
        d.setHours(0, 0, 0);

        if (date === 'now' || date === 'today') {
            return d;
        }

        const match = date.match(/^(\+|-)\s*(\d+) (day|month|year)s?$/);

        if (!match) {
            return d;
        }

        const [
            ,
            operator,
            variable,
            period,
        ] = match;

        const modifier = parseInt(variable, 10) * (operator === '+' ? 1 : -1);

        switch (period) {
            case 'year':
                d.setFullYear(d.getFullYear() + modifier);
                break;

            case 'month':
                d.setMonth(d.getMonth() + modifier);
                break;

            case 'day':
                d.setDate(d.getDate() + modifier);
                break;
            default:
        }

        return d;
    };

    let initialValue:string = '';
    let formatValue:string = '';
    let defaultDay:string = '';
    let defaultMonth:string = '';
    let defaultYear:string = '';

    const maxDate = useMemo(() => (
        typeof maxDateRaw === 'string'
            ? parseDateString(maxDateRaw)
            : maxDateRaw
    ), [maxDateRaw]);

    const minDate = useMemo(() => (
        typeof minDateRaw === 'string'
            ? parseDateString(minDateRaw)
            : minDateRaw
    ), [minDateRaw]);

    if (defaultValue) {
        const initialDate = new Date(defaultValue);

        defaultDay = initialDate.getDate().toString().padStart(2, '0');
        defaultMonth = (initialDate.getMonth() + 1).toString().padStart(2, '0');
        defaultYear = initialDate.getFullYear().toString();

        initialValue = `${defaultYear}-${defaultMonth}-${defaultDay}`;
        formatValue = `${defaultDay}/${defaultMonth}/${defaultYear}`;
    }

    const [dateIso, setDateIso] = useState<string>(initialValue);
    const ref = useRef(null);

    const handleChangeMulti = () => {
        const day = (document.getElementById(`${id}-day`) as HTMLInputElement)?.value.padStart(2, '0');
        const month = (document.getElementById(`${id}-month`) as HTMLInputElement)?.value.padStart(2, '0');
        const year = (document.getElementById(`${id}-year`) as HTMLInputElement)?.value.padStart(4, '0');

        setDateIso(`${year}-${month}-${day}`);
    };

    useEffect(() => {
        if (typeof window === 'undefined') { return; }

        const datePicker = new DatePicker(
            ref.current,
            {
                /**
                 * @param {Date} date - The date string
                 */
                dateSelectCallback(date:Date) {
                    setDateIso(dateToIsoString(date));
                },
                disabledDates,
                maxDate,
                minDate,
                imagePath: '/design-system/images/icons/',
            },
        );

        datePicker.init();
    }, [ref, maxDate, minDate, disabledDates]);

    return (
        <>
            <div
                className={classNames(
                    'ds_datepicker',
                    multiple ? 'ds_datepicker--multiple' : '',
                    className,
                )}
                data-module="ds-datepicker"
                ref={ref}
            >
                {(
                    multiple
                        ? (
                            <div className="ds_datepicker__input-wrapper">
                                <div>
                                    <Label htmlFor={`${id}-day`}>
                                        Day
                                    </Label>
                                    <Input
                                        type="number"
                                        name={`${name}-day`}
                                        id={`${id}-day`}
                                        width="fixed-2"
                                        className="js-datepicker-date"
                                        wrap={false}
                                        defaultValue={defaultDay}
                                        error={error}
                                        onKeyUp={handleChangeMulti}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor={`${id}-month`}>
                                        Month
                                    </Label>
                                    <Input
                                        type="number"
                                        name={`${name}-month`}
                                        id={`${id}-month`}
                                        width="fixed-2"
                                        className="js-datepicker-month"
                                        wrap={false}
                                        defaultValue={defaultMonth}
                                        error={error}
                                        onKeyUp={handleChangeMulti}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor={`${id}-year`}>
                                        Year
                                    </Label>
                                    <Input
                                        type="number"
                                        name={`${name}-year`}
                                        id={`${id}-year`}
                                        width="fixed-4"
                                        className="js-datepicker-year"
                                        wrap={false}
                                        defaultValue={defaultYear}
                                        error={error}
                                        onKeyUp={handleChangeMulti}
                                    />
                                </div>
                            </div>
                        )
                        : (
                            <Input
                                name={`${name}-date`}
                                id={id}
                                width="fixed-10"
                                defaultValue={formatValue}
                                wrap="class"
                            />
                        )
                )}
            </div>
            <input type="hidden" name={name} value={dateIso} />
        </>
    );
};

export default DateInput;
