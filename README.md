# angular-variable-as-observable
Updating another component based on changes made on some other component


# Declaring an item as Observable in the service file (commonService.service.ts)
private items: BehaviorSubject<any> = new BehaviorSubject<any>(this.data);
  
items$: Observable<any> = this.items.asObservable();

Passing the values to the variable
getData() {
    this.data = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    this.items.next(this.data);
    return this.data;
}
  
# Detecting the change on another component
subscription: Subscription;

ngOnInit() {
    this.subscription = this.commonService.items$.subscribe(items => this.items = items);
}

ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
}
  
