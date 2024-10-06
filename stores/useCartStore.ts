import { create } from "zustand";

interface cartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialItems: cartItemProps[] = [
  { id: 1, name: "Sepatu addidas puma putih", price: 150000, quantity: 1 },
  { id: 2, name: "Baju kameja hitam polos", price: 200000, quantity: 1 },
  { id: 3, name: "celana chinos crem", price: 125000, quantity: 1 },
];

interface useCartStoreProps {
  items: cartItemProps[];
  addItem: (product: Omit<cartItemProps, "quantity">) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const useCartStore = create<useCartStoreProps>((set) => ({
  items: initialItems,

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

  // Function untuk menghapus product
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  // Function untuk menambahkan kuantitas item di cart
  increaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  // Function untuk mengurangi kuantitas item di cart
  decreaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));

export default useCartStore;
