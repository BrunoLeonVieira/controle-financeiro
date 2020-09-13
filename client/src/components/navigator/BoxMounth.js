import React from "react";
import Select from "react-select";

const options = [
  { value: "2019-01", label: "2019-01" },
  { value: "2019-02", label: "2019-02" },
  { value: "2019-03", label: "2019-03" },
  { value: "2019-04", label: "2019-04" },
  { value: "2019-05", label: "2019-05" },
  { value: "2019-06", label: "2019-06" },
  { value: "2019-07", label: "2019-07" },
  { value: "2019-08", label: "2019-08" },
  { value: "2019-09", label: "2019-09" },
  { value: "2019-10", label: "2019-10" },
  { value: "2019-11", label: "2019-11" },
  { value: "2019-12", label: "2019-12" },
  { value: "2020-01", label: "2020-01" },
  { value: "2020-02", label: "2020-02" },
  { value: "2020-03", label: "2020-03" },
  { value: "2020-04", label: "2020-04" },
  { value: "2020-05", label: "2020-05" },
  { value: "2020-06", label: "2020-06" },
  { value: "2020-07", label: "2020-07" },
  { value: "2020-08", label: "2020-08" },
  { value: "2020-09", label: "2020-09" },
  { value: "2020-10", label: "2020-10" },
  { value: "2020-11", label: "2020-11" },
  { value: "2020-12", label: "2020-12" },
  { value: "2021-01", label: "2021-01" },
  { value: "2021-02", label: "2021-02" },
  { value: "2021-03", label: "2021-03" },
  { value: "2021-04", label: "2021-04" },
  { value: "2021-05", label: "2021-05" },
  { value: "2021-06", label: "2021-06" },
  { value: "2021-07", label: "2021-07" },
  { value: "2021-08", label: "2021-08" },
  { value: "2021-09", label: "2021-09" },
  { value: "2021-10", label: "2021-10" },
  { value: "2021-11", label: "2021-11" },
  { value: "2021-12", label: "2021-12" },
];

export default function BoxMounth({ period, onSelected }) {
  const handleChange = (selectedOption) => {
    onSelected(selectedOption.value);
  };

  return (
    <Select
      value={{ value: period, label: period }}
      onChange={handleChange}
      options={options}
    />
  );
}
