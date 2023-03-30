import { Input , Button , Select , Textarea , ButtonGroup} from "@chakra-ui/react";

import { useRef } from "react"
import { Link , useNavigate } from "react-router-dom" 
import swal from 'sweetalert';
import axios from "axios"
export default function MyForm() {
  const navi = useNavigate();
  if((localStorage.getItem("admin")||"NO")==="NO"){
   navi("/")
  }
  document.title = "Online Store :- Add Products ..."
  const formRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      swal("Processing...!", {
        buttons: false,
      });
      const formdata = {
      "TITLE": form.TITLE.value,
      "IMAGE": form.IMAGE.value,
      "PRICE": form.PRICE.value,
      "MAINCATEGORY": form.MAINCATEGORY.value,
      "DESC": form.DESC.value,
      
      }
       axios.post("https://davidbridal.onrender.com/data",formdata)
        .then(response => {
          swal("Product Added to Site...!", "Click Ok to Continue ...!", "success");
          formRef.current.reset();
        })
        .catch(error => console.error('Error!'));
    }
    
    return (
      <>
       <div style={{display:"flex",justifyContent:"space-between" , margin:"20px 40px"}}>
          <Link to="/admin_dashboard"><Button>Back to Admin Dashboard...</Button></Link>
          <ButtonGroup>
            <Link to="/"><Button>Home Page</Button></Link>
            <Link to="./create_admin_account"><Button>Create New Admin Account...</Button></Link>
          </ButtonGroup>
        </div>
        <div style={{maxWidth:"500px",margin:"auto"}}>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="Form" ref={formRef}>
        <Textarea name="TITLE" type="text" placeholder="Title of Product ..." required />
        <Input name="IMAGE" type="text" placeholder="ImgURL..." required />
        <Select name="MAINCATEGORY" placeholder='Select Category ...' required>
          <option value='Bestsellers'>Bestsellers</option>
          <option value='SkinCare'>Skin Care</option>
          <option value='HairCare'>Hair Care</option>
          <option value='Makeup'>Makeup</option>
          <option value='Tools_Devices'>Tools & Devices</option>
          <option value='Bath_Body'>Bath & Body</option>
          <option value='Fragrance'>Fragrance Shop</option>
          <option value='Gifts_Sets'>Gifts & Sets</option>
        </Select>
        <Input name="PRICE" type="number" placeholder="Price of Product ..." required />
        
        
        <Textarea name="DESC" type="text" placeholder="Des of Product..." required />
        
        <ButtonGroup style={{display:"flex",justifyContent:"space-between"}}>
           <Link to="/admin_dashboard"><Button>...Back</Button></Link>
           <Button type="submit">Add to Site ... </Button>
        </ButtonGroup>
      </form>
      </div>
      </>
    );
  }
