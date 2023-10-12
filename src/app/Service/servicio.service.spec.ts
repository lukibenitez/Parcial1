import { TestBed } from '@angular/core/testing';
import { ProductosService } from '../Service/productosService';

describe('ServicioService', () => {
    let service: ProductosService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProductosService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
