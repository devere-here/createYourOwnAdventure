function Node(value){
  this.value = value
  this.children = []
}

export default function situationTreeCreator(arr){

  let head = new Node(arr.shift()),
    queue = [],
    newQueue = []

  queue.push(head)

  while (arr.length){
    queue.forEach(elem => {
      while (elem.children.length < 4){
        let child = new Node(arr.shift())
        elem.children.push(child)
        newQueue.push(child)
      }
    })
    queue = newQueue
  }

  return head
}
