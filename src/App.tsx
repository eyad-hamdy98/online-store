import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/Ui/Button";
import Input from "./components/Ui/Input";

const App = () => {

    /*----------- STATE --------------*/
    
    let [isOpen, setIsOpen] = useState(false);
    
    /*----------- HABDLER --------------*/
    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }


  /*----------- RENDER --------------*/
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map(input => 
    <div className="flex flex-col">
      <label htmlFor={input.id}  className="mb-[2px] text-sm font-medium text-gray-700" >{input.Label}</label>
      <Input type="text" id={input.id} name={input.id}/>
    </div>
  )
  return (
    <main className="container">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>Add</Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 md:gap-4 rounded-md ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD NEW PRODUCT">
          <form className="space-y-3">
            {renderFormInputList}
        <div className="flex items-center space-x-3 ">
        <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
        <Button className="bg-gray-400 hover:bg-gray-500">Cancel </Button>
        </div>
          </form>
      </Modal>
    </main>
  );
};

export default App;
