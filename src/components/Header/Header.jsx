import React from 'react'

function Header() {
  return (
    <section>
        <section>
            <div></div>
            <div></div>
            <div></div>
        </section>
    </section>
  )
}

export default Header

const Header () => {
    return ( <>
    <section>
    <div className={classes.header_container}> {/* logo section */}
    <div className= {classes.logo__container}> <a href="#">
    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
    alt="amazon logo" />
    </a>
    <div className={classes.delivery} >
    <span>
    <SlLocationPin />
    </span>
    <div >
    <p>Deliver to</p>
    <span>Ethiopia</span>
    </div>
    </div>
    </div>
    {/* search section */}
    <div className={classes.search}>

----------------

<BsSearch size={25} /> 
</div>
{/* other section */}
<div className={classes.order_container}> <a href="" className={classes.language}>
<img
src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
alt="" />

<select name="" id="">
<option
</select>
</a>
<a href="">
value="">EN</option>
<p>Sign In</p>
<span>Account & Lists</span>
</a>
<a href="">
<p>returns</p>
<span>& Orders</span>
</a>
<a href="" className={classes.cart}>
<BiCart size={35} />
<span>0</span>
</a>
</div>
</div>
</section>
<LowerHeader/>
};
);
</>

-------------------




.search select { border: none;
}

.search input {
}
border: 1px solid
width: 100%;
margin-right: -2px; /* border: none; */

.search svg {
}
padding: 7px;
background:
white;
I
#febd69;
color: #1alala;

.search svg:hover {
}
background-color:

.search: focus-within { border: 2px solid
#d49644;
rgb(235, 161, 173
}

-----------

.order_container { display: flex; align-items: center; justify-content: center; max-width: 450px;
}
gap: 10px;

.order_container a {
}
text-decoration: none;
color: white;

.order_container p {
}
font-size: 10px;

.language {
width: 100px;
display: flex;
padding: 10px;
}

.language select {
background-color: #1a1ala;
border: none;
color:
white;
}

.language img { width: 40%;
}

.cart {
}
position: relative;

.cart span {
position: absolute; font-weight: bold; top: -6px;
font-size: 20px;
background-color: #lalala;
left: 14px;
color: orange
}
------------------------
// Hover Effect
.order_container a:hover, 
.delivery:hover,

.logo_container a:hover,

.lower_container ul li:hover { border: 1px solid
border-radius: 3px;
white;
}
--------------



-----------------
.lower_container ul li:first-child {
    display: flex;
    gap: 2px;
    align-items: center;
    }
    @media screen and (max-width: 576px) { .header_container
    display: flex;
    flex-direction: column !important; height: auto;
    .lower_container ul li:not
    (:first-child) {
    I
    display: none;
    }
    .language {
    display: none;
    }
    }


