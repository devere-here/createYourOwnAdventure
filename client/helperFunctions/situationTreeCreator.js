function Node(value){
  this.value = value
  this.children = []
}

export default function situationTreeCreator(arr, numberOfChildren = 4){

  let head = new Node(arr.shift()),
    queue = [],
    newQueue = []

  queue.push(head)

  while (arr.length){
    queue.forEach(elem => {
      while (elem.children.length < numberOfChildren){
        let child = new Node(arr.shift())
        elem.children.push(child)
        newQueue.push(child)
      }
    })
    queue = newQueue
    newQueue = []
  }

  return head
}
