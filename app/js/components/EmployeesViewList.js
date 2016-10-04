import React from 'react';
import update from 'react-addons-update';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <div>{value}</div>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value} />
      )}
    </ul>
  );
});

class EmployeesViewList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: props.items
    }
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    let oldClass = 'employees-table__td ' + this.state.items[oldIndex].props.className;
    let newClass = 'employees-table__td ' + this.state.items[newIndex].props.className;

    if(newIndex === 0 || oldIndex === 0) {

      alert('BOSS POSITION, YOU CANNOT DO THAT!');

    } else {

      let items = this.state.items.map((item, i) => {

        if(i === newIndex) {

          return update(item, {
            props: {
              className: {
                $set: oldClass
              }
            }
          });

        } else if(i === oldIndex) {

          return update(item, {
            props: {
              className: {
                $set: newClass
              }
            }
          });

        }

        return item;
      });

      this.setState({
        items: arrayMove(items, oldIndex, newIndex)
      });
    }

  }

  render() {
    return (
      <div className='employees-table'>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
      </div>
    )
  }
}

export default EmployeesViewList;
