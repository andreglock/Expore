import deleteItem from '../libs/deleteItem.js';

export default function ChildrenPrompt (props) {
    const handleClose = () => props.setShow(false);

    const info = props.itemInfo;

    const handleDelete = async () => {
        // as it is now the parent is not deleted
        // SHOULD THE PARENT BE DELETED VIA FRONTEND OR BACKEND?
        const message = await deleteItem(info.id);
        alert(message);
        handleClose();
    } 

    const handleMove = async () => {
        // TODO
        alert("function under construction");
        handleClose();
    }

    return <div className="modal">
        {info.children === 1 ? 
            <h3>This item has {info.children} children do you wanna delete it?</h3> :
            <h3>This item has {info.children} children do you wanna delete them all?</h3>
        }
        <button onClick={handleMove}>
            No, I want to move {info.children === 1 ? "it" : "them" }
        </button>
        <button onClick={handleDelete}>
            Yes I would like to delete {info.children === 1 ? "it" : "them" }
        </button>
        <button onClick={handleClose}>
            Cancel
        </button>
    </div>
}