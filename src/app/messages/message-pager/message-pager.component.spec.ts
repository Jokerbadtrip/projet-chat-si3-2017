import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MessagePagerComponent } from "./message-pager.component";

describe("MessagePagerComponent", () => {
  let component: MessagePagerComponent;
  let fixture: ComponentFixture<MessagePagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
