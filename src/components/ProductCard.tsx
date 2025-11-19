import type { IProduct } from "../interfaces";
import { numberWithCommas, txtSlicer } from "../utils/function";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./Ui/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  idx: number;
  openEditModal: () => void;
  setProductToEditIdx: (value: number) => void;
  openConfirmModal: () => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  idx,
  setProductToEditIdx,
  openConfirmModal,
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  /*----------- RENDER --------------*/
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  /*----------- HANDELER --------------*/
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIdx(idx);
  };

  const onRemove = () => {
    setProductToEdit(product);
    openConfirmModal();
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3 justify-between">
      <Image
        imageURL={imageURL}
        alt={"product Name"}
        className="rounded-md h-52 w-full lg:object-cover"
      />
      <image />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 break-words">
        {txtSlicer(description)}
      </p>

      <div className="flex items-center flex-wrap  space-x-1">
        {!colors.length ? (
          <p className="min-h-[20px]">Not Available Colors!</p>
        ) : (
          renderProductColors
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">
          ${numberWithCommas(price)}
        </span>
        <div className=" flex items-center justify-center space-x-2">
          <h5>{category.name}</h5>
          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2 ">
        <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={onEdit}>
          Edit
        </Button>
        <Button className="bg-[#c2344d] hover:bg-red-800" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
