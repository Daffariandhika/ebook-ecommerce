export const formatAsRupiah = (price) => {
    const newPrice = price * 1000;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(newPrice);
  };
  