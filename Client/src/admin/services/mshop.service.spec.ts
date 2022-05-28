import { TestBed } from '@angular/core/testing';

import { MshopService } from './mshop.service';

describe('MshopService', () => {
    let service: MshopService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MshopService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
