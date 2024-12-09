export interface ProductTitle {
  ar: string;
  en: string;
}

export interface Product {
  productId: string;
  userId: string;
  title: ProductTitle;
  description: ProductTitle;
  categoryId: string | null;
  price: number;
  priceSale: number | null;
  image: string | null;
  sku: string | null;
  quantity: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFormData {
  title: ProductTitle;
  description: ProductTitle;
  categoryId?: string | null;
  price: number;
  priceSale?: number | null;
  image?: string | null;
  sku?: string | null;
  quantity?: number | null;
  isActive?: boolean;
}

export interface ProductsListResponse {
  result: Product[];
  meta: {
    message: string;
  };
  errors?: string[];
}

export interface ProductResponse {
  result: Product;
  meta: {
    message: string;
  };
  errors?: string[];
}
