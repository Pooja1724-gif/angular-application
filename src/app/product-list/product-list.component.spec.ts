
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductListComponent } from './product-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch products on component initialization', () => {
    const mockData = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' }
    ];

    component.ngOnInit();
    const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/comments');
    expect(request.request.method).toBe('GET');
    request.flush(mockData);

    expect(component.products).toEqual(mockData.slice(0, 50));
  });

  it('should handle API error', () => {
    component.ngOnInit();
    const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/comments');
    expect(request.request.method).toBe('GET');
    request.error(new ErrorEvent('API Error'));

    expect(component.products).toBeUndefined();
  });
});
