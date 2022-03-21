import React from 'react'

function NavBar({filterItem, MenuList}) {
  return (
    <>
        <nav className="navbar">
            <div className="btn-group">
                {

                    // iterating over each element of uniqueList(i.e passes via MenuList)
                    MenuList.map((curElem) =>{
                        return (
                                                                //onclick filter list by current category
                            <button className="btn-group__item" onClick={()=> filterItem(curElem)}>
                                {curElem}
                            </button>
                        );
                    })
                }
            </div>
        </nav>
    </>
  )
}

export default NavBar;