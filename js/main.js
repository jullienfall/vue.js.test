let tableData = [
    {
        callwaiting: 'Call Waiting',
        read: 'Yes',
        sound: 'Sound',
        truck: 'Truck',
        origin: 'Erie PA',
        destination: 'Sealy TX',
        pickup: 'pickup',
        dho: 'ss',
        dhd: 'dd',
        fp: 'fp',
        leng: 12,
        weigth: 32,
        trip: 422,
        alarm: 'test',
        action: 'call'
    },
    {
        callwaiting: 'Call Waiting',
        read: 'Yes',
        sound: 'Sound',
        truck: 'Truck',
        origin: 'Erie PA',
        destination: 'Sealy TX',
        pickup: 'pickup',
        dho: 'ss',
        dhd: 'dd',
        fp: 'fp',
        leng: 14,
        weigth: 30,
        trip: 422,
        alarm: 'test',
        action: 'call'
    },
    {
        callwaiting: 'Call Waiting',
        read: 'Yes',
        sound: 'Sound',
        truck: 'Truck',
        origin: 'Erie PA',
        destination: 'Sealy TX',
        pickup: 'pickup',
        dho: 'ss',
        dhd: 'dd',
        fp: 'fp',
        leng: 15,
        weigth: 31,
        trip: 422,
        alarm: 'test',
        action: 'call'
    },
    {
        callwaiting: 'Call Waiting',
        read: 'Yes',
        sound: 'Sound',
        truck: 'Truck',
        origin: 'Erie PA',
        destination: 'Sealy TX',
        pickup: 'pickup',
        dho: 'ss',
        dhd: 'dd',
        fp: 'fp',
        leng: 11,
        weigth: 32,
        trip: 422,
        alarm: 'test',
        action: 'call'
    }
        ];

const newRowGen = () => ({
    callwaiting: '',
    read: '',
    sound: '',
    truck: '',
    origin: '',
    destination: '',
    pickup: '',
    dho: '',
    dhd: '',
    fp: '',
    leng: '',
    weigth: '',
    trip: '',
    alarm: '',
    action: ''
});

const table = new Vue({
    el: '.grid',
    data: () => {
        return {
            addNew: false,
            columns: ['Call Control', 'Read', 'Sound / Auto Call', 'Truck', 'Origin', 'Destination', 'Pickup', 'DH-O', 'DH-D', 'F/P', 'Length', 'Weight', 'Trip', 'Alarm', 'Actions'],
            tableData: tableData,
            newItem: newRowGen()
        }
    },
    methods: {
        addItem() {
            if (this.newItem.callwaiting) {
                this.tableData.push(this.newItem)
                this.newItem = newRowGen()
                this.addNew = false
            }
        },
        removeAll() {
            this.tableData = []
        }
    }
});