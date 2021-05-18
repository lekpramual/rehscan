export default function DateThai(strdate) {
  const strDate = new Date(strdate);
  const strYear = strDate.getFullYear() + 543;
  const strMonth = strDate.getMonth();
  const strDay = strDate.getDate();
  const strMonthCut = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const strMonthai = strMonthCut[strMonth];
  return `${strDay} ${strMonthai} ${strYear}`;
}
