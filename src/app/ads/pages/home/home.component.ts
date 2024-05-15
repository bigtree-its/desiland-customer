import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  faAnglesRight,
  faArrowLeft,
  faArrowRight,
  faBed,
  faChevronRight,
  faFilter,
  faHome,
  faSort,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import {
  AdSearchQuery,
  GeneralAd,
  PropertyAd,
  PropertySearchQuery,
} from 'src/app/model/all-ads';
import { Address } from 'src/app/model/common';
import { AdsService } from 'src/app/services/ads/ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent: ElementRef<any>;

  adService = inject(AdsService);
  modalService = inject(NgbModal);

  location: Address;
  category: string;
  propertyType: string;
  consumptionType: string;
  minAmount: number;
  maxAmount: number;
  minBed: number;
  maxBed: number;
  properties: PropertyAd[] = [];
  ads: GeneralAd[] = [];

  faFilter = faFilter;
  faSort = faSort;
  faTag = faTag;
  faBed = faBed;
  faHome = faHome;
  // faArrowRight = faChevronRight;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  categories: string[] = [
    'All',
    'Property',
    'Cars',
    'Jobs',
    'Toys',
    'Furniture',
    'Services',
    'Events',
    'Electronics',
    'Books',
  ];
  showLandingPage: boolean;
  searchRadius: any;

  ngOnInit(): void {
    this.category = 'All';
    this.getAll();
  }

  onEmitAddress(address: Address) {
    this.location = address;
    console.log('Address emitted '+ JSON.stringify(address))
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 150,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 150,
      behavior: 'smooth',
    });
  }

  private getAll() {
    var query: PropertySearchQuery = {};
    query.lastMonth = true;
    this.adService.getProperties(query).subscribe((d) => {
      this.properties = d;
    });
    var adQuery: AdSearchQuery = {};
    adQuery.lastMonth = true;
    this.adService.getAds(adQuery).subscribe((d) => {
      this.ads = d;
    });
  }

  onChangeLocation(e: any) {
    this.location = e.target.value;
  }

  onSelectCategory(e: any) {
    this.category = e;
    var adQuery: AdSearchQuery = {};
    adQuery.lastMonth = true;
    switch (this.category) {
      case 'All':
        this.getAll();
        break;
      case 'Property':
        var query: PropertySearchQuery = {};
        query.lastMonth = true;
        this.adService.getProperties(query).subscribe((d) => {
          this.properties = d;
        });
        break;
      case 'Cars':
        adQuery.category = 'Cars';
        this.getAds(adQuery);
        break;
      case 'Furniture':
        adQuery.category = 'Furniture';
        this.getAds(adQuery);
        break;
      case 'Books':
        adQuery.category = 'Books';
        this.getAds(adQuery);
        break;
      case 'Services':
        adQuery.category = 'Services';
        this.getAds(adQuery);
        break;
      case 'Jobs':
        adQuery.category = 'Jobs';
        this.getAds(adQuery);
        break;
      case 'Events':
        adQuery.category = 'Events';
        this.getAds(adQuery);
        break;
      case 'Electronics':
        adQuery.category = 'Electronics';
        this.getAds(adQuery);
        break;
      case 'Ads':
        this.getAds(adQuery);
        break;
      case 'Toys':
        adQuery.category = 'Toys';
        this.getAds(adQuery);
        break;
      default:
        alert('Default case');
    }
  }

  private getAds(adQuery: AdSearchQuery) {
    this.adService.getAds(adQuery).subscribe((d) => {
      this.ads = d;
      console.log(
        'Result of ' + adQuery.category + ': ' + JSON.stringify(this.ads)
      );
    });
  }

  isSelectedCategory(c: string) {
    return this.category === c;
  }
  onChangeCategory(e: any) {
    this.category = e.target.value;
  }

  onChangePropertyTypeList(e: any) {
    this.propertyType = e.target.value;
  }

  onChangeConsumptionType(e: any) {
    this.consumptionType = e.target.value;
  }

  selectPropertyType(evt: any) {
    this.propertyType = evt.target.value;
  }

  openModal(content) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'custom-class',
      })
      .result.then(
        (result) => {},
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  close() {
    this.modalService.dismissAll();
  }

  handleSearchRadius(evt: any) {
    this.searchRadius = evt.target.value;
  }

  searchProperties() {
    var query: PropertySearchQuery = {};
    if (this.propertyType && this.propertyType !== 'Any') {
      query.type = this.propertyType;
    }
    if (this.location) {
      query.location = this.location.city;
    }
    if (this.consumptionType) {
      query.consumptionType = this.consumptionType;
    }
    if (this.minAmount) {
      query.minAmount = this.minAmount;
    }
    if (this.maxAmount) {
      query.maxAmount = this.maxAmount;
    }
    if (this.minBed) {
      query.minBedroom = this.minBed;
    }
    if (this.maxBed) {
      query.maxBedroom = this.maxBed;
    }
    console.log('property search query ' + JSON.stringify(query));
    this.adService.getProperties(query).subscribe((d) => {
      this.properties = d;
      console.log('Result ' + JSON.stringify(this.properties));
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
