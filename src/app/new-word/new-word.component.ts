import { Component, OnInit } from '@angular/core';
import {WordsService} from "../services/words.service";
import {WordsDto} from "../dtos";

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.css']
})
export class NewWordComponent implements OnInit {

  word = {} as WordsDto;
  words: WordsDto[] = [];
  selectedIndex: number = 0;
  lastWordsLimit = 10;

  constructor(private wordsService: WordsService) {
    this.word.score = 0;
    this.word.skipped = 0;
    this.word.watched = 0;
  }

  ngOnInit(): void {
    this.wordsService.getLastCreatedWords(this.lastWordsLimit).subscribe(data => this.words = data);
  }

  saveWord() {
    if (!this.word.name) {
      return;
    }
    this.word.createdAt = Date.now();
    this.wordsService.addWord(this.word).subscribe(() => this.selectedIndex = 2);
  }
}
